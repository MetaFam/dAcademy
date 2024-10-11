import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { toHTTP } from '../utils'
import abi from '../abis/Token.json'
import { Chapter, useLoadedBook } from '../BookContext'

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
      address: book.nft.address as `0x${string}`,
      abi,
      functionName: 'mint',
      args: [[book.reader], [book.nft.id]],
    })
  }
  const mintable = book.chapters?.every(
    (chapter: Chapter) => chapter.status === 'pass'
  )

  const label = (() => {
    if(confirming) return 'Confirming…'
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
            <span className="loading loading-spinner loading-md"></span>
            {label}
          </button>
        )}
      </div>
    </div>
  )
}

export default Reward