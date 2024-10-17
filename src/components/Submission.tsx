import React, { useState, Suspense, ReactNode, useEffect } from 'react'
import toast from 'react-hot-toast'
import {
  useChainId,
  useConfig,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { watchChainId } from '@wagmi/core'
import { MDXEditorMethods } from '@mdxeditor/editor'
import clsx from 'clsx'
import { Book, useLoadedBook } from '../BookContext'
import { upload } from '../utils'
import abi from '../abis/QuestChain.json'

const CHAIN = 10

declare global {
  interface Window {
    ethereum: any
  }
}

export const Alert = ({ children }: { children: ReactNode }) => (
  <div role="alert" className="alert alert-warning flex items-center mt-10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
    {children}
  </div>
)

export const Submission = () => {
  const book = useLoadedBook()
  const chain = useChainId()
  const editorRef = React.useRef<MDXEditorMethods>(null)
  const [saving, setSaving] = useState(false)
  const [error, setErrorObject] = useState<Record<string, ReactNode>>({})
  const setError = ({ type, error }: { type: string, error: ReactNode }) => {
    setErrorObject((old) => ({ ...old, [type]: error }))
  }
  const {
    data: hash,
    writeContract,
    isPending: pending,
  } = useWriteContract()
  const config = useConfig()
  const errorSource = {
    chain: ({
      type: 'chain',
      error: (
        <h3 className="flex text-center items-center justify-center">
          Please
          <a onClick={() => {
            window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: `0x${CHAIN.toString(16)}`}],
            })
          }}
          className="underline text-accent hover:text-accent-content mx-1">
            switch to the Optimism network
          </a>
          to continue.
        </h3>
      )
    }),
    account: ({
      type: 'account',
      error: (
        <h3 className="flex text-center items-center justify-center">
          Please
          <div className="mx-2"><w3m-button size="sm"/></div>
          to submit a proof.
        </h3>
      )
    })
  }
  useEffect(() => {
    if(config) {
      return watchChainId(config, {
        onChange(chainId: number) {
          if(chainId !== CHAIN && !error.chain) {
            setError(errorSource.chain)
          }
        },
      })
    }
  }, [config])

  const { contract = null } = (!!book && 'contract' in book) ? book : {}
  useEffect(() => {
    if(hash) {
      toast.success(
        <p>
          Successfully submitted transaction
          <a href={`https://optimistic.etherscan.io/tx/${hash}`} className="mx-1 whitespace-nowrap text-primary hover:text-secondary" target="_blank">
            {hash.substring(0, 8)}…{hash.slice(-6)}
          </a>
          to the Quest Chain contract at
          <a href={`https://optimistic.etherscan.io/address/${contract}`} className="ml-1 whitespace-nowrap text-primary hover:text-secondary" target="_blank">
            {contract?.substring(0, 6)}…{contract?.slice(-4)}
          </a>.
        </p>,
        { duration: 12_000, style: { width: '45ch' } },
      )
    }
  }, [hash])
  const { isLoading: confirming, isSuccess: confirmed } = (
    useWaitForTransactionReceipt({ hash })
  )

  if(book.reader == null && !error.account) {
    setError(errorSource.account)
  } else if((book as Book).reader != null && error.account) {
    setError({ type: 'account', error: null })
  }

  if(chain !== CHAIN && !error.chain) {
    setError(errorSource.chain)
  } else if(chain === CHAIN && error.chain) {
    setError({ type: 'chain', error: null })
  }

  const errors = Object.values(error).filter(Boolean)
  if(errors.length > 0) {
    return errors.map((error, index) => (
      <Alert key={index}>{error}</Alert>
    ))
  }

  const Editor = React.lazy(
    () => import('./MarkdownEditor')
  )

  const defaultLabel = 'Submit Proof'
  const label = (() => {
    if(confirming) return 'Confirming…'
    if(pending) return 'Transaction Pending…'
    if(saving) return 'Saving to IPFS…'
    if(confirmed) return '¡Done: Submitted!'
    return defaultLabel
  })()

  return (
    <Suspense fallback={<h3>Loading Submission Editor…</h3>}>
      <Editor
        {...{ editorRef }}
        markdown=""
        className="dark-theme dark-editor content mt-10"
      />
      <button
        onClick={async () => {
          const markdown = editorRef.current?.getMarkdown()
          if(!markdown) throw new Error(
            `Invalid \`markdown\`: "${markdown}".`
          )

          setSaving(true)

          try {
            const blob = new Blob(
              [JSON.stringify({ name, description: markdown })],
              { type: 'application/json' },
            )
            const cid = await upload([
              new File([blob], 'submission.json'),
            ])
            toast.success(
              <p>
                Successfully uploaded your response submission to
                <a href="https://web3.storage" target="_blank" className="mx-1 whitespace-nowrap text-primary hover:text-secondary">
                  Web3.Storage
                </a>
                at
                <a href={`https://w3s.link/ipfs/${cid}`} target="_blank" className="ml-1 whitespace-nowrap text-primary hover:text-secondary">
                  ipfs://{cid.substring(0, 6)}…{cid.slice(-4)}
                </a>.
              </p>,
              { duration: 15_000, position: 'bottom-center', style: { width: '45ch' } },
            )

            if(book.on == null) throw new Error('No current chapter.')

            writeContract({
              address: contract as `0x${string}`,
              abi,
              functionName: 'submitProofs',
              args: [[book.on - 1], [cid]],
            }, {
              onError: (error) => {
                console.error({ error })
                toast.error(
                  (error as { shortMessage: string }).shortMessage
                  ?? error.message, {
                    duration: 12_000,
                  }
                )
              },
            })
          } catch(error) {
            console.error({ error })
            toast.error((error as Error).message)
          } finally {
            setSaving(false)
          }
        }}
        disabled={label !== defaultLabel}
        className={'btn btn-wide text-primary my-6'}
      >
        <span className={clsx(label.endsWith('…') && 'loading loading-dots loading-md')}></span>
        {label}
      </button>
    </Suspense>
  )
}

export default Submission