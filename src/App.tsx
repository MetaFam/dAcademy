import './App.css';
import Carousel from'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import playbooks from './playbooks.json';
import SectionHeader from './components/SectionHeader';
import CarouselItem from './components/CarouselItem';

interface CarouselSectionProps {
  id: string;
  title: string;
  description: string;
  items: { title: string; image: string }[];
}

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

const CarouselSection = ({ id, title, description, items }: CarouselSectionProps) => (
  <div id={id} className="container p-4 mt-30 gap-4">
    <SectionHeader title={title} description={description} />
    <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8 w-full">
      {items.map((item, index) => (
        <div id={`${id}-${item.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
          <CarouselItem item={item} />
        </div>
      ))}
    </Carousel>
  </div>
);

const App = () => {


  return (
    <>
      <div>
        <h2 className="text-accent font-light text-3xl mb-2 pt-6">A de-store of knowledge.  Onboard forward.</h2>
      </div>
      <div className="container p-4 mt-30 gap-4">
        {playbooks.map((category, index) => (
          <CarouselSection
            key={index}
            id={category.title.toLowerCase().replace(/\s+/g, '-')}
            title={category.title}
            description={category.description}
            items={category.books}
          />
        ))}
      </div>
      <div className="fixed bottom-0 right-0 p-4">
        <a className="btn btn-ghost text-xl" onClick={() => window.scrollTo({ top: 0, behavior:'smooth' })}>
          <div className="flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7 7 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7 7 7" />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
};

export default App;