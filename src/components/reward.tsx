import { CarbonShare } from './share'
import { toHTTP } from '../utils'

export const Reward = ({ image }: { image: string }) => {
  return (
    <div id="reward" className="flex flex-col ml-4">
      <div className="text-blue-900 hover:text-white flex justify-center mb-10 mt-8">
        <CarbonShare />
      </div>
      <p className="text-left ml-1 mb-2">x% completed</p>
      <progress className="progress progress-primary w-full mx-auto" value={15} max="100"></progress>
      <div className="clearfix mt-2">
        <p className="text-left ml-1 float-left">0 approved</p>
        <p className="text-right float-right">x/y submitted</p>
      </div>
      <div className="card rounded-none bg-secondary/25 h-auto max-w-md mt-8 mr-4 mx-auto">
        <h1 className="text-3xl font-bold text-left mt-4 mb-2 ml-4">Reward</h1>
        <h2 className="text-xl font-semibold text-left mt-2 mb-1 ml-4">Achievement NFT</h2>
        <img src={toHTTP(image)} alt="Soulbound NFT" className="w-full h-full object-contain pb-4 px-4" />
      </div>
    </div>
  )
}

export default Reward