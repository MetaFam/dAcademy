import { toHTTP } from '../utils'

export const Reward = ({ image }: { image: string }) => {
  return (
    <div id="reward" className="flex flex-col ml-4">
      <div className="card rounded-sm bg-secondary/25 h-auto max-w-md mr-4 mx-auto">
        <h1 className="text-3xl font-bold text-left mt-4 mb-2 ml-4">Reward</h1>
        <h2 className="text-xl font-semibold text-left mt-2 mb-1 ml-4">Achievement NFT</h2>
        <img src={toHTTP(image)} alt="Soulbound NFT" className="w-full h-full object-contain pb-4 px-4" />
      </div>
    </div>
  )
}

export default Reward