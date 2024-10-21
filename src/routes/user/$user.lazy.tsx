import { useEffect, useState } from 'react'
import {
  createLazyFileRoute,
  useNavigate,
  useLocation,
  Link,
} from '@tanstack/react-router'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Earned from '../../components/UserProfile/Earned'
import Statuses from '../../components/UserProfile/Statuses'
import Attended from '../../components/UserProfile/Attended'
import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"

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

export const Route = createLazyFileRoute('/user/$user')({
  component: () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = Route.useParams()
    const [ens, setENS] = useState(
      user.includes('.') ? user : `0x${user.substring(0, 6)} ... `
    )
    const [error, setError] = useState<string>()


    useEffect(() => {
      const client = createPublicClient({
        chain: mainnet,
        transport: http(),
      })

      if(!user.includes('.')) {

        client
        .getEnsName({ address: user as `0x${string}` })
        .then((name) => { if (name) {
          setENS(name)
        }else{
          setError(`${user} is not a valid Ethereum address.`)
        }})
      }else{
        client
        .getEnsAddress({name: user})
        .then((address) => {
          if(!address) setError(`${user} is not a valid ENS name.`)
        })
      }
    })

    if(error) return <h1>{error}</h1>
    return (
      <div>
        <h1 className="text-2xl font-semibold mt-12 mb-8">Profile for userX</h1>
        <div className="drawer drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start">
            <div id="nfts-earned" className="w-11/12 bg-secondary/25 scroll-m-24">
              <h1 className="text-lg font-semibold mt-4 mb-4">NFTs Earned</h1>
              <Carousel
                {...{ responsive }}
                className="top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0">
                <Earned />
                <Earned />
                <Earned />
                <Earned />
                <Earned />
              </Carousel>
            </div>
            <div id="submission-statuses" className="mt-4 mb-4 w-11/12">
              <Statuses />
            </div>
            <div id="workshops-attended" className="mt-4 mb-4 w-11/12">
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
                <Link to={'#submission-statuses' as '/'}>
                  Submission Statuses
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
      </div>
    )
  },
})
