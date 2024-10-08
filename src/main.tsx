import { StrictMode } from'react'
import { createRoot } from'react-dom/client'
import './index.css'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { mainnet, optimism } from '@reown/appkit/networks'
import {
  QueryClient, QueryClientProvider,
} from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import {
  RouterProvider, createRouter, createHashHistory,
} from '@tanstack/react-router'

import { ReactNode } from'react'
import { routeTree } from './routeTree.gen'

const hashHistory = createHashHistory()
const router = createRouter({
  routeTree, history: hashHistory,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID

const metadata = {
  name:'retest1',
  description: 'AppKit Example',
  url: 'https://web3modal.com',
  icons: ['https://dacade.my/octopus%20icon.svg']
}

export const networks = [mainnet, optimism]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId
})

console.log({ projectId })

createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, optimism],
  metadata,
  projectId,
  showWallets: true,
  features: {
    analytics: true,
    email: false,
    socials: ['x', 'farcaster', 'discord'],
  }
})

const AppKitProvider = ({ children }: { children: ReactNode }) => (
  <WagmiProvider config={wagmiAdapter.wagmiConfig}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </WagmiProvider>
)

const root=document.getElementById('root')!
if (!root.innerHTML){
  createRoot(root).render(
    <StrictMode>
      <AppKitProvider>
        <RouterProvider {...{ router }} />
      </AppKitProvider>
    </StrictMode>,
  )
}

export default AppKitProvider