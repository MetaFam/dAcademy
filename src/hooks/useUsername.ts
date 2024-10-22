import { maybeENS } from "#utils"
import { useEffect, useState } from "react"
import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"

export const useUsername = (user?: string) => {
  const [address, setAddress] = useState(
    maybeENS(user) ? undefined : user
  )
  const [ens, setENS] = useState(
    maybeENS(user) ? user : `${user?.substring(0, 6)}…`
  )
  const [error, setError] = useState<string>()

  useEffect(() => {
    const client = createPublicClient({
      chain: mainnet,
      transport: http(),
    })

    if (!maybeENS(user)) {
      client.getEnsName({ address: user as `0x${string}` })
      .then((name) => {
        if(name) {
          setENS(name)
        } else {
          setError(`${user} is not a valid Ethereum address.`)
        }
      })
    } else if(user != null) {
      client.getEnsAddress({ name: user })
      .then((address) => {
        if(!address) {
          setError(`${user} is not a valid ENS name.`)
        } else {
          setAddress(address)
        }
      })
    }
  })
  return { ens, address, error }
}