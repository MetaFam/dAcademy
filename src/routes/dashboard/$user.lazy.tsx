import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { responsive } from '#carousel.config'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import OrgStatuses from '#components/dashboard/OrgStatuses'
import Given from '#components/dashboard/Given'
import Completions from '#components/dashboard/Completions'
import Shelf from '#components/dashboard/Shelf'
import Top from '#components/Top'


export const Route = createLazyFileRoute('/dashboard/$user')({
  component: () => {
    const { user } = Route.useParams()
    const [ens, setENS] = useState(
      user.includes('.') ? user : `${user.substring(0, 6)} ... `,
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
          if(!address) {
            setError(`${user} is not a valid ENS name.`)
          }
        })
      }
    })

    if (error) return <h1>{error}</h1>

    return (
      <div>
        <h1 className="text-2xl font-semibold text-secondary mt-12 mb-8">
          Dashboard for organizationXYZ
        </h1>
        <div className="drawer lg:drawer-open sticky">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div id="top" className="drawer-content flex flex-col items-center justify-start scroll-m-24">
            <div id="bookshelf" className="w-11/12 bg-secondary/25 scroll-m-24">
              <h1 className="text-lg font-semibold mt-4 mb-4">Current Bookshelf</h1>
              <Carousel
                {...{ responsive }}
                className="top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0">
                <Shelf />
                <Shelf />
                <Shelf />
                <Shelf />
                <Shelf />
              </Carousel>
            </div>
            <div id="statuses" className="mt-4 mb-4 w-11/12 scroll-m-24">
              <OrgStatuses />
            </div>
            <div id="completions" className="w-11/12 bg-secondary/25 scroll-m-24">
              <h1 className="text-lg font-semibold mt-4 mb-4">Completion NFTs</h1>
              <Carousel
                {...{ responsive }}
                className="top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0">
                <Completions />
                <Completions />
                <Completions />
                <Completions />
                <Completions />
              </Carousel>
            </div>
            <div id="workshops-given" className="mt-4 mb-4 w-11/12 scroll-m-24">
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
                <Link to={'#bookshelf' as '/'}>Current Bookshelf</Link>
              </li>
              <li>
              <Link to={'#statuses' as '/'}>Submissions</Link>
              </li>
              <li>
                <Link to={'#completions' as '/'}>Completion NFTs</Link>
              </li>
              <li>
                <Link to={'#workshops-given' as '/'}>Workshops Given</Link>
              </li>
              <li>
                <Link to="/upload">Upload Books</Link>
              </li>
            </ul>
          </div>
        </div>
        <Top/>
      </div>
    )
  }
})
