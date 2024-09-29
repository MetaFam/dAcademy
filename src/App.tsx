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
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
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
                    <a>Meta/Game-b</a>
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
                    <a>Current AI</a>
                  </li>
                  <li>
                    <a>Random Complentary Skills</a>
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
                    <a>Meta/Game-b</a>
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
                    <a>Current AI</a>
                  </li>
                  <li>
                    <a>Random Complentary Skills</a>
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
      <h2 className="text-accent font-light text-3xl mb-16 pt-6">A de-store of knowledge.  Onboard forward.</h2>
      <div className="justify-start">
        <h1 className="text-2xl font-medium text-primary justify-left text-left ml-12"> Meta/GameB</h1>
        <h2 className="text-xl font-medium text-accent justify-left text-left ml-12">
          Bigger picture, the grander game.
        </h2>
      </div>
      <div className="container mx-auto p-4 mt-30">
      <div className="mb-16">
        <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 gap-4">
            <figure>
              <img src="./assets/gameb.webp" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">WTF is GameB?</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/metacrisis.webp" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">WTF is the MetaCrisis?</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/moloch.webp" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Meditations on Moloch</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/metamodernist.webp" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10 font-bold">Political MetaModernism:Bridging Divides</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/goodquests.webp" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Choose Good Quests</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/memedriven.webp" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Meme Driven Organizations</h2>
            </div>
          </div>
        </Carousel>
        </div>
        <div className="mb-16">
          <div className="justify-start">
              <h1 className="text-2xl font-medium text-primary justify-left text-left ml-12">
                 Web3 General
              </h1>
              <h2 className="text-xl font-medium text-accent justify-left text-left ml-12">
                Web3 basics: how & why
              </h2>
            </div>
        <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 5</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 6</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 7</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 8</h2>
            </div>
          </div>
        </Carousel>
        </div>
        <div className="justify-start">
        <h1 className="text-2xl font-medium text-primary justify-left text-left ml-12"> DAO Playbooks</h1>
        <h2 className="text-xl font-medium text-accent justify-left text-left ml-12">
          DAO Tooling/Coordination Methods
        </h2>
      </div>
        <div className="mb-16">
        <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 9</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 10</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 11</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 12</h2>
            </div>
          </div>
        </Carousel>
        </div>
        <div className="justify-start">
        <h1 className="text-2xl font-medium text-primary justify-left text-left ml-12"> Self-Actualization/Well-being</h1>
        <h2 className="text-xl font-medium text-accent justify-left text-left ml-12">
          Level-up, self-improve
        </h2>
      </div>
        <div className="mb-16">
        <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
        <div className="mb-8">
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 13</h2>
            </div>
          </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 14</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 15</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 16</h2>
            </div>
          </div>
        </Carousel>
        </div>
      </div>
    </>
  );
}

export default App;