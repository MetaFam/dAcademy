import React from'react';
import './App.css';
import Carousel from'react-multi-carousel';
import'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 464 },
    items: 2
  }
};

function App() {
  return (
    <>
      <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2">
                <li>
                    <a>Meta - Game-b</a>
                  </li>
                  <li>
                    <a>Web3 General</a>
                  </li>
                  <li>
                    <a>DAO Playbooks</a>
                  </li> 
                  <li>
                    <a>Self Actualization</a>
                  </li>
                  <li>
                    <a>Building Chain by Chain</a>
                  </li>
                  <li>
                    <a>ReFi</a>
                  </li>
                  <li>
                    <a>Random Skills</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Submit</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">dAcademy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Support</a>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 z-10">
                  <li>
                    <a>Meta - Game-b</a>
                  </li>
                  <li>
                    <a>Web3 General</a>
                  </li>
                  <li>
                    <a>DAO Playbooks</a>
                  </li> 
                  <li>
                    <a>Self Actualization</a>
                  </li>
                  <li>
                    <a>Building Chain by Chain</a>
                  </li>
                  <li>
                    <a>ReFi</a>
                  </li>
                  <li>
                    <a>Random Skills</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Submit</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end px-4">
          <w3m-button className="btn btn-sm pr-16 rounded" />
        </div>
      </div>
      <div>
      <h2 className="text-accent font-light text-3xl mb-16 pt-6">A de-store of knowledge.  Onboard forward.</h2>
      </div>
      <div className="justify-start">
        <h1 className="text-2xl font-medium text-primary justify-left text-left ml-12"> Meta/GameB</h1>
        <h2 className="text-xl font-medium text-accent justify-left text-left ml-12">
          Bigger picture, the grander game.
        </h2>
      </div>
      <div className="container p-4 mt-30 gap-4">
      <div className="mb-16">
        <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl shadow-md mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/gameb.webp" alt="WTF is GameB?" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">WTF is GameB?</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/metacrisis.webp" alt="WTF is the MetaCrisis?" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">WTF is the MetaCrisis?</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/moloch.webp" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Meditations on Moloch</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/metamodernist.webp" alt="Political MetaModernism" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Political MetaModernism:
                Bridging Divides</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/goodquests.webp" alt="Choose Good Quests" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Choose Good Quests</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/memedriven.webp" alt="Meme Driven Organizations" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Meme Driven Organizations</h2>
            </div>
          </div>
        </Carousel>
        </div>
          <div className="justify-start mb-4">
              <h1 className="text-2xl font-medium text-primary justify-left text-left">
                Web3 General
              </h1>
              <h2 className="text-xl font-medium text-accent justify-left text-left">
                Web3 basics: how & why
              </h2>
            </div>
            <div className="mb-16">
        <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/ethereum.webp" alt="wtf is ethereum" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">WTF is Ethereum?</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/daos.webp" alt="wtf are daos" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">WTF are DAOs?</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/defi.webp" alt="wtf is defi" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">WTF is DeFi?</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/nfts.webp" alt="wtf are nfts" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">WTF are NFTs?</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/dapps.webp" alt="wtf are dapps" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">WTF are dApps?</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/web3builder.webp" alt="web 3 developer" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Become a Web3 Developer</h2>
            </div>
          </div>
        </Carousel>
        </div>
        <div className="justify-start mb-4">
        <h1 className="text-2xl font-medium text-primary justify-left text-left"> DAO Playbooks</h1>
        <h2 className="text-xl font-medium text-accent justify-left text-left">
          DAO Tooling/Coordination Methods
        </h2>
      </div>
        <div className="mb-16">
        <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/best-dao-contributor.webp" alt="Become the Best Contributor in any DAO" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Become the Best Contributor in any DAO</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lgS">
            <figure className="border-white border">
              <img src="./assets/daosummoner.webp" alt="Starting DAOs 101" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Starting DAOs 101</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/impact-networks.webp" alt="Impact Networks" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Impact Networks</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/coordinape.webp" alt="Use Coordinape to Reward Contributors" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Use Coordinape to Reward Contributors</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/holacracy.webp" alt="Effective Meetings with Holacracy" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Effective Meetings with Holacracy</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/daowriter.webp" alt="Entering a DAO as a Writer" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Entering a DAO as a Writer</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/successful-teams.webp" alt="Building Successful Teams" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Building Successful Teams</h2>
            </div>
          </div>
        </Carousel>
        </div>
        <div className="justify-start mb-4">
        <h1 className="text-2xl font-medium text-primary justify-left text-left"> Self-Actualization/Well-being</h1>
        <h2 className="text-xl font-medium text-accent justify-left text-left">
          Level-up, self-improve
        </h2>
      </div>
        <div className="mb-16">
        <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
        <div className="mb-8">
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/creatorgame.webp" alt="How to Play the Creator Game" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">How to Play the Creator Game</h2>
            </div>
          </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/time.webp" alt="Embrace the Ticking Clock" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Embrace the Ticking Clock</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/biases.webp" alt="Know your Biases" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Know your BiasesS</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/imposter.webp" alt="Understanding Imposter Syndrome" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Understanding Imposter Syndrome</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
            <figure className="border-white border">
              <img src="./assets/journaling.webp" alt="Journaling like Dickie Bush" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-extrabold">Journaling like Dickie Bush</h2>
            </div>
          </div>
        </Carousel>
        </div>
      </div>
    </>
  );
}

export default App;