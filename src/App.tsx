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

const sectionTitles = {
  metaGameB: 'Meta/GameB',
  web3General: 'Web3 General',
  daoPlaybooks: 'DAO Playbooks',
  selfActualization: 'Self-Actualization/Well-being'
};

const SectionHeader = ({ title, description }) => (
  <div className="justify-start mb-4">
    <h1 className="text-2xl font-medium text-primary justify-left text-left">{title}</h1>
    <h2 className="text-xl font-medium text-accent justify-left text-left">{description}</h2>
  </div>
);

const CarouselSection = ({ title, description, items }) => (
  <div className="mb-16">
    <SectionHeader title={title} description={description} />
    <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
      {items.map((item, index) => (
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
);

const App = () => {
  const sections = Object.keys(playbooks);

  return (
    <>
      <Navbar />
      <div>
        <h2 className="text-accent font-light text-3xl mb-16 pt-6">A de-store of knowledge.  Onboard forward.</h2>
      </div>
      <div className="container p-4 mt-30 gap-4">
        {sections.map((section, index) => (
          <CarouselSection
            key={index}
            title={sectionTitles[section]}
            description={playbooks[section].description}
            items={playbooks[section].items}
          />
        ))}
      </div>
    </>
  );
};

export default App;