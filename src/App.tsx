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
                <a>Media Outlet</a>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2">
                  <li>
                    <a>Web3 Basics</a>
                  </li>
                  <li>
                    <a>ReFi</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">dAcademy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 z-10">
                  <li>
                    <a>Web3 Basics</a>
                  </li>
                  <li>
                    <a>ReFi</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end px-4">
          <w3m-button className="btn btn-sm pr-16 rounded" />
        </div>
      </div>
      <div className="container mx-auto p-4">
      <div className="mb-16">
        <Carousel responsive={responsive} className="gap-4 md:gap-6 lg:gap-8">
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 1</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 2</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 3</h2>
            </div>
          </div>
          <div className="basis-1/4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 flex-1 flex place-items-center p-0 image-full z-0 card bg-base-100 shadow-xl mr-4">
            <figure>
              <img src="./assets/buildonop.png" alt="drw" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white z-10">Playbook 4</h2>
            </div>
          </div>
        </Carousel>
        </div>
        <div className="mb-16">
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