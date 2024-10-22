import { Suspense, useEffect, useState } from 'react'
import {
  createLazyFileRoute,
  Link,
} from '@tanstack/react-router'
import 'react-multi-carousel/lib/styles.css'
import Earned from '../../components/UserProfile/Earned'
import Statuses from '../../components/UserProfile/Statuses'
import Attended from '../../components/UserProfile/Attended'
import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"


export const Route = createLazyFileRoute('/user/$user')({
  component: () => {
    const { user } = Route.useParams()
    const [address, setAddress] = useState<string>()
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
        setAddress(user)
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
          if(!address) {
            setError(`${user} is not a valid ENS name.`)
          }else{
            setAddress(address)
          }
        })
      }
    })

    if(error) return <h1>{error}</h1>
    return (
      <div>
        <div className="drawer drawer-open">
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
            <div id="submissions" className="mt-4 mb-4 w-11/12">
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
      </div>
    )
  },
})
