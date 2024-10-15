import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { toHTTP } from '../utils'
import abi from '../abis/QuestChain.json'
import { Chapter, useLoadedBook } from '../BookContext'
import toast from 'react-hot-toast'

export const Reward = () => {
  const book = useLoadedBook()
  const { data: hash, writeContract } = useWriteContract()
  const { isLoading: confirming, isSuccess: confirmed } = (
    useWaitForTransactionReceipt({ hash })
  )

  if(!book) throw new Error('No book found.')

  const mint = () => {
    if(!book) throw new Error('No book found.')
    writeContract({
      address: book.contract as `0x${string}`,
      abi,
      functionName: 'mintToken',
      args: [],
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
      onSuccess: (hash) => (
        toast.success(
          <p>
            Minted in transaction
            <a href={`https://optimistic.etherscan.io/tx/${hash}`} className="mx-1 whitespace-nowrap text-primary hover:text-secondary" target="_blank">
              {hash.substring(0, 8)}…{hash.slice(-6)}
            </a>.
          </p>,
          { duration: 12_000 },
        )
      )
    })
  }
  let mintable = book.chapters?.every(
    (chapter: Chapter) => (
      chapter.status === 'pass' || chapter.optional
    )
  ) && !book.nft.minted

  const defaultLabel = 'Mint NFT'
  const label = (() => {
    if(confirming) return (
      <>
        <span className="loading loading-spinner loading-md"></span>
        Confirming…
      </>
    )
    if(confirmed) return '¡Done: Minted!'
    return defaultLabel
  })()

  return (
    <div id="reward" className="flex flex-col ml-4 mt-8 md:mt-1">
      <div className="card rounded-sm bg-secondary/25 h-auto max-w-md mr-4 mx-auto">
        <h1 className="text-3xl font-bold text-center my-4 mx-2">Completion NFT</h1>
        <img src={toHTTP(book.nft.image)} alt="Soulbound NFT" className="w-full h-full object-contain pb-4 px-4" />
        {mintable && (
          <button disabled={label !== defaultLabel} onClick={mint} className="btn btn-primary">
            {label}
          </button>
        )}
        {book.nft.minted && (
          <h2 className="bg-info rounded-md p-4">
            You've already collected this NFT.
          </h2>
        )}
      </div>
    </div>
  )
}

export default Reward