import { capitalize } from './helpers'
import React, {
  ButtonHTMLAttributes,
  HTMLProps, MouseEvent, useCallback, useMemo, useState,
} from 'react'
import { useAccount, useChainId } from 'wagmi'
import { optimism } from '@reown/appkit/networks'
import tyl from './SubmitButton.module.css'

export const SubmitButton: React.FC<{
  purpose?: string
  processing?: boolean
  label?: string
  requireStorage?: boolean
  short?: boolean
  openSettings?: () => void
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  purpose = 'create',
  processing = false,
  short = false,
  // onClick,
  requireStorage = true,
  label = `${capitalize(purpose)} NFT`,
  openSettings,
  className = null,
  ...props
}) => {
  const chainId = useChainId()
  const { address } = useAccount()
  const offChain = useMemo(
    () => chainId !== optimism.id,
    [chainId],
  )
  const [working, setWorking] = useState(processing)
  const desiredNetwork = (
    offChain ? optimism.name : null
  )

  const onClick = useCallback(async (evt: MouseEvent<HTMLButtonElement>) => {
    try {
      setWorking(true)

      if(!address) {
        evt.preventDefault()
        alert('Please connect your wallet to continue.')
      } else if(offChain) {
        evt.preventDefault()
        // switchTo(optimism.id)
      } else {
        // onClick?.apply(null, [evt])
      }
    } finally {
      setWorking(false)
    }
  }, [
    address,
    offChain,
    openSettings,
    requireStorage,
  ])

  return <>
    <button
      className={
        [className, tyl.button].filter((e) => !!e).join(' ')
      }
      {...{ onClick, ...props }}
    >
      {(() => {
        if(processing || working) {
          return (
            <>
              <span className="loading loading-spinner"/>
              <p>{capitalize(purpose).replace(/e$/, '')}ing…</p>
            </>
          )
        } else if(!address) {
          return `Connect To ${capitalize(purpose)}`
        } else if(offChain) {
          return `Connect To ${
            !short ? 'The ' : ''
          }${desiredNetwork}${
            !short ? ` Network To ${capitalize(purpose)}` : ''
          }`
        // } else if(!rwContract) {
        //   return 'Contract Not Connected'
        } else {
          return label
        }
      })()}
    </button>
  </>
}

export default SubmitButton