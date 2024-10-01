import React from'react';
import './App.css';
import Carousel from'react-multi-carousel';
import'react-multi-carousel/lib/styles.css';
import Navbar from './components/Navbar';
import playbooks from './playbooks.json';

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
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h2 className="text-accent font-light text-3xl mb-16 pt-6">A de-store of knowledge.  Onboard forward.</h2>
      </div>
      <div className="justify-start mb-4">
        <h1 className="text-2xl font-medium text-primary justify-left text-left ml-4"> Meta/GameB</h1>
        <h2 className="text-xl font-medium text-accent justify-left text-left ml-4">
          Bigger picture, the grander game.
        </h2>
      </div>
      <div className="container p-4 mt-30 gap-4">
        <div className="mb-16">
          <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
            {playbooks.metaGameB.map((item, index) => (
              <div key={index} className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
                <figure className="border-white border">
                  <img src={item.image} alt={item.alt} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-white z-10 font-extrabold">{item.title}</h2>
                </div>
              </div>
            ))}
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
            {playbooks.web3General.map((item, index) => (
              <div key={index} className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
                <figure className="border-white border">
                  <img src={item.image} alt={item.alt} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-white z-10 font-extrabold">{item.title}</h2>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="justify-start mb-4">
          <h1 className="text-2xl font-medium text-primary justify-left text-left">
            DAO Playbooks
          </h1>
          <h2 className="text-xl font-medium text-accent justify-left text-left">
            DAO Tooling/Coordination Methods
          </h2>
        </div>
        <div className="mb-16">
          <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
            {playbooks.daoPlaybooks.map((item, index) => (
              <div key={index} className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
                <figure className="border-white border">
                  <img src={item.image} alt={item.alt} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-white z-10 font-extrabold">{item.title}</h2>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="justify-start mb-4">
          <h1 className="text-2xl font-medium text-primary justify-left text-left">
            Self-Actualization/Well-being
          </h1>
          <h2 className="text-xl font-medium text-accent justify-left text-left">
            Level-up, self-improve
          </h2>
        </div>
        <div className="mb-16">
          <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
            {playbooks.selfActualization.map((item, index) => (
              <div key={index} className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4 rounded-l-none rounded-rt-lg rounded-br-lg">
                <figure className="border-white border">
                  <img src={item.image} alt={item.alt} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-white z-10 font-extrabold">{item.title}</h2>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default App;