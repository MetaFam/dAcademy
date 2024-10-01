import React from'react';
import './App.css';
import Carousel from'react-multi-carousel';
import'react-multi-carousel/lib/styles.css';
import Navbar from './components/Navbar';
import playbooks from './playbooks.json';
import SectionHeader from './components/SectionHeader';
import CarouselItem from './components/CarouselItem';

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

const CarouselSection = ({ title, description, items }) => (
  <div className="mb-16">
    <SectionHeader title={title} description={description} />
    <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
      {items.map((item, index) => (
        <CarouselItem key={index} item={item} />
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
            title={playbooks[section].title}
            description={playbooks[section].description}
            items={playbooks[section].items}
          />
        ))}
      </div>
    </>
  );
};

export default App;