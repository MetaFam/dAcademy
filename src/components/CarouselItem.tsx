import React from'react';

interface CarouselItemProps {
  item: {
    image: string;
    alt?: string;
    title: string;
  };
}

const CarouselItem = ({ item }: CarouselItemProps) => (
  <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 mr-4 rounded-l-none rounded-rt-lg rounded-br-lg pb-4">
    <figure className="border-white border">
      <img src={item.image} alt={item.alt} />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-white z-10 font-extrabold">{item.title}</h2>
    </div>
  </div>
);

export default CarouselItem;