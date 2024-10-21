import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { createLazyFileRoute } from '@tanstack/react-router'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import Earned from '../../components/UserProfile/Earned'
import OrgStatuses from '../../components/dashboard/OrgStatuses'
import Given from '../../components/dashboard/Given'

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
}

export const Route = createLazyFileRoute('/dashboard/$user')({
  component: () => {
    const { user } = Route.useParams()
    const [ens, setENS] = useState(
      user.includes('.') ? user : `0x${user.substring(0, 6)} ... `,
    )
    const [error, setError] = useState<string>()

    useEffect(() => {
      const client = createPublicClient({
        chain: mainnet,
        transport: http(),
      })

      if (!user.includes('.')) {
        client.getEnsName({ address: user as `0x${string}` }).then((name) => {
          if (name) {
            setENS(name)
          } else {
            setError(`${user} is not a valid Ethereum address.`)
          }
        })
      } else {
        client.getEnsAddress({ name: user }).then((address) => {
          if (!address) setError(`${user} is not a valid ENS name.`)
        })
      }
    })

    if (error) return <h1>{error}</h1>

    return (
      <div>
        <h1 className="text-2xl font-semibold text-secondary mt-12 mb-8">
          Dashboard for organizationXYZ
        </h1>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start">
            <div className="w-11/12 bg-secondary/25">
              <h1 className="text-lg font-semibold mt-4 mb-4">Current Books</h1>
              <Carousel
                {...{ responsive }}
                className="top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0"
              >
                <Earned />
                <Earned />
                <Earned />
                <Earned />
                <Earned />
              </Carousel>
            </div>
            <div className="mt-4 mb-4 w-11/12">
              <OrgStatuses />
            </div>
            <div className="mt-4 mb-4 w-11/12">
              <Given />
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side max-h-fit">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content max-h-fit w-80 p-4">
              <h1 className="mt-4 mb-4 text-lg font-secondary">{ens}</h1>
              <li>
                <a>Current Books</a>
              </li>
              <li>
                <a>Submission Statuses</a>
              </li>
              <li>
                <a>Workshops Given</a>
              </li>
              <li>
                <a>Upload Books</a>
              </li>
              <li>
                <a>Completion NFTs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
})
