import { useChainId } from 'wagmi'
import etherscans from '@/data/etherscans.json'
import factories from '@/data/factories.json'

export const useEtherscan = () => {
  const chainId = useChainId()
  const scan = etherscans[
    chainId.toString() as keyof typeof etherscans
  ]
  if(!scan) {
    throw new Error(`No Etherscan for chain: #${chainId}`)
  }
  return scan
}

export const useFactory = () => {
  const chainId = useChainId()
  const factory = factories[
    chainId.toString() as keyof typeof factories
  ]
  if(!factory) {
    throw new Error(`No Factory for chain: #${chainId}`)
  }
  return factory
}
