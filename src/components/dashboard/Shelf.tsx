const Shelf = () => {


  return (
    <div className="card bg-secondary/25 h-auto max-w-md mr-4 mx-auto rounded-sm">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Cover</h2>
        <p>From book</p>
      </div>
      <figure className="px-2 pt-2 pb-4">
        <img
          src="https://bafybeia6d4mg4kd4xok772piolmvvpdd56usbabfmsqkzzg2qcr24orzsq.ipfs.w3s.link/metagame-logo.svg"

          alt="Book Cover"
          className="rounded-sm"
        />
      </figure>
    </div>
  )
}

export default Shelf