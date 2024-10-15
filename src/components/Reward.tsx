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
      console.debug({addr: book.nft.address, user: book.reader, id: book.nft.id})
      const ret = writeContract({
      address: book.contract as `0x${string}`,
      abi,
      functionName: 'mintToken',
      args: [],
    }, {
      onError: (error) => {
        console.error({ error })
        toast(error.shortMessage ?? error.message, {
          duration: 12_000,
        })
      },
    })
    console.debug({ret})
  }
  let mintable = book.chapters?.every(
    (chapter: Chapter) => (
      chapter.status === 'pass' || chapter.optional
    )
  ) && !book.nft.minted

  const label = (() => {
    if(confirming) return (
      <>
        <span className="loading loading-spinner loading-md"></span>
        Confirming…
      </>
    )
    if(confirmed) return '¡Done: Minted!'
    return 'Mint NFT'
  })()

  return (
    <div id="reward" className="flex flex-col ml-4 mt-8 md:mt-1">
      <div className="card rounded-sm bg-secondary/25 h-auto max-w-md mr-4 mx-auto">
        <h1 className="text-3xl font-bold text-center my-4 mx-2">Completion NFT</h1>
        <img src={toHTTP(book.nft.image)} alt="Soulbound NFT" className="w-full h-full object-contain pb-4 px-4" />
        {mintable && (
          <button onClick={mint} className="btn btn-primary">
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