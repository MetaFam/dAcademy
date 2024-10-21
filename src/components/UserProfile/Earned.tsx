// import { Book } from '../BookContext'
// import { toHTTP } from '../../utils'
// import { useAccount } from 'wagmi'

const Earned = () => {
  // const account = useAccount()
  // const reader = account?.address?.toLowerCase()?? null

  // if (!reader) return <div>Loading...</div>
  // if (!reader.nft ||!reader.nft.image) return <div>No NFT image available</div>

  return (
    <div className="card bg-secondary/25 h-auto max-w-md mr-4 mx-auto rounded-sm">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Completion NFT</h2>
        <p>From org/shelf</p>
      </div>
      <figure className="px-2 pt-2 pb-4">
        <img
          src="https://bafybeia6d4mg4kd4xok772piolmvvpdd56usbabfmsqkzzg2qcr24orzsq.ipfs.w3s.link/metagame-logo.svg"
          // {toHTTP(reader.nft.image)}
          alt="Completion NFT"
          className="rounded-sm"
        />
      </figure>
    </div>
  )
}

export default Earned