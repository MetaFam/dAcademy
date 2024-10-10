import { useWriteContract } from 'wagmi'
import { toHTTP } from '../utils'
import abi from '../abis/Token.json'

export const Reward = (
  { image, mintable = false }:
  { image: string, mintable?: boolean }
) => {
  const { data: hash, writeContract } = useWriteContract()
  const mint = () => {
    writeContract({
      address: contract as `0x${string}`,
      abi,
      functionName: 'mint',
      args: [[minter], [id]],
    })
  }

  return (
    <div id="reward" className="flex flex-col ml-4 mt-8 md:mt-1">
      <div className="card rounded-sm bg-secondary/25 h-auto max-w-md mr-4 mx-auto">
        <h1 className="text-3xl font-bold text-center my-4 mx-2">Completion NFT</h1>
        <img src={toHTTP(image)} alt="Soulbound NFT" className="w-full h-full object-contain pb-4 px-4" />
        {mintable && (
          <button className="btn btn-primary">Mint NFT</button>
        )}
      </div>
    </div>
  )
}

export default Reward