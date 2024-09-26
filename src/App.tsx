import './App.css'

function App() {

  return (
    <>
      <div className="flex justify-end mr-2">
        <w3m-button className="btn btn-sm"/>
      </div>
        <div className="flex justify-center mt-4">
          <div className="flex place-items-center card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="/assets/rushweek.webp"
          alt="DAO Rush Week" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">DAO Rush Week</h2>
        <p>Sign up for the event!</p>
        <div className="card-actions justify-center pt-4">
          <button className="btn btn-secondary">RSVP</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
