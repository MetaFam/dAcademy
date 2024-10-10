import { toHTTP } from '../utils'

export const Reward = ({ image }: { image: string }) => {
  return (
    <div id="reward" className="flex flex-col ml-4 mt-8 md:mt-1">
      <div className="card rounded-sm bg-secondary/25 h-auto max-w-md mr-4 mx-auto">
        <h1 className="text-3xl font-bold text-center my-4 mx-2">Completion NFT</h1>
        <img src={toHTTP(image)} alt="Soulbound NFT" className="w-full h-full object-contain pb-4 px-4" />
      </div>
    </div>
  )
}

export default Reward