import { useChainId } from 'wagmi'
import etherscans from '@/data/etherscans.json'
import factories from '@/data/factories.json'
import subgraphs from '@/data/subgraphs.json'

export const useEtherscan = () => {
  const chainId = useChainId()
  const scan = etherscans[
    chainId.toString() as keyof typeof etherscans
  ]
  if(scan == null) {
    throw new Error(`No Etherscan for Chain: #${chainId}`)
  }
  return scan
}

export const useFactory = () => {
  const chainId = useChainId()
  const factory = factories[
    chainId.toString() as keyof typeof factories
  ] as `0x${string}`
  if(!factory) {
    throw new Error(`No Factory for Chain: #${chainId}`)
  }
  return factory
}

export const useSubgraph = () => {
  const chainId = useChainId()
  const subgraph = subgraphs[
    chainId.toString() as keyof typeof subgraphs
  ]
  if(!subgraph) {
    throw new Error(`No Subgraph for Chain: #${chainId}`)
  }
  return subgraph
}
