import { createLazyFileRoute } from '@tanstack/react-router'
import Earned from '../../components/UserProfile/Earned'
import Statuses from '../../components/UserProfile/Statuses'
import Carousel from'react-multi-carousel'
import'react-multi-carousel/lib/styles.css'
import Attended from '../../components/UserProfile/Attended'
import { useNavigate, useLocation } from '@tanstack/react-router';
import { useEffect } from'react';

// import { getAccount } from '@wagmi/core'
// import { getEnsAvatar } from '@wagmi/core'
// import { getEnsName } from '@wagmi/core'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Route = createLazyFileRoute('/user/')({
  component: () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior:'smooth' });
        }
      }
    }, [location.hash]);

    return (
      <div>
        <h1 className="text-2xl font-semibold mt-12 mb-8">Profile for userX</h1>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start">
            <div id="nfts-earned" className="w-11/12 bg-secondary/25">
              <h1 className="text-lg font-semibold mt-4 mb-4">NFTs Earned</h1>
              <Carousel {...{ responsive }} className="top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0">
                <Earned />
                <Earned />
                <Earned />
                <Earned />
                <Earned />
              </Carousel>
            </div>
            <div id="submission-statuses" className="mt-4 mb-4 w-11/12">
              <Statuses/>
            </div>
            <div id="workshops-attended" className="mt-4 mb-4 w-11/12">
              <Attended/>
            </div>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <h1 className="mt-4 mb-4 text-lg font-secondary">ENS/Account Info</h1>
              <li><a onClick={() => navigate({ hash: 'nfts-earned' })}>NFTs Earned</a></li>
              <li><a onClick={() => navigate({ hash:'submission-statuses' })}>Submission Statuses</a></li>
              <li><a onClick={() => navigate({ hash: 'workshops-attended' })}>Workshops Attended</a></li>
              <li><a>Something else</a></li>
              <li><a>Something else</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})