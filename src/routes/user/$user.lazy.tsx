import { Suspense } from 'react'
import { createLazyFileRoute, Link} from '@tanstack/react-router'
import 'react-multi-carousel/lib/styles.css'
import Earned from '#components/UserProfile/Earned'
import Statuses from '#components/UserProfile/Statuses'
import Attended from '#components/UserProfile/Attended'
import Top from '#components/Top'
import { useUsername } from '#hooks/useUsername'


export const Route = createLazyFileRoute('/user/$user')({
  component: () => {
    const { user } = Route.useParams()
    const { address, ens, error } = useUsername(user)

    if(error) return <h1>{error}</h1>

    return (
      <div>
        <h1 id="top" className="text-2xl font-semibold text-secondary mt-12 mb-8 scroll-m-28">
          User Profile
        </h1>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start">
            <div id="nfts-earned" className="w-11/12 bg-secondary/25 scroll-m-24">
              <h1 className="text-lg font-semibold mt-4 mb-4">NFTs Earned</h1>
              <Suspense fallback={
                <h2 className="loading loading-spinner"></h2>
              }>
                <Earned account={address}/>
              </Suspense>
            </div>
            <div id="submissions" className="mt-4 mb-4 w-11/12 scroll-m-24">
             <div className="card bg-secondary/25 h-auto w-full mx-auto rounded-sm">
                <div className="card-body items-center text-center px-12">
                  <h2 className="card-title">Submission Statuses</h2>
              <Suspense fallback={
                  <h2 className="loading loading-spinner"></h2>
                }><Statuses account={address}/>
              </Suspense>
              </div>
                </div>
            </div>
            <div id="workshops-attended" className="mt-4 mb-4 w-11/12 scroll-m-24">
              <Attended />
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            />
            <ul className="menu bg-base-200 text-base-content min-w-0">
              <h1 className="mt-4 mb-4 text-lg font-secondary">
                {ens}
              </h1>
              <li>
                <Link to={'#nfts-earned' as '/'}>
                  NFTs Earned
                </Link>
              </li>
              <li>
                <Link to={'#submissions' as '/'}>
                  Submissions
                </Link>
              </li>
              <li>
                <Link to={'#workshops-attended' as '/'}>
                  Workshops Attended
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Top/>
      </div>
    )
  },
})
