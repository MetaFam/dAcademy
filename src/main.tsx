import { StrictMode, ReactNode } from'react'
import { createRoot } from'react-dom/client'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import {
  AppKitNetwork, optimism, optimismSepolia
} from '@reown/appkit/networks'
import {
  QueryClient, QueryClientProvider,
} from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import {
  RouterProvider, createRouter, createHashHistory,
} from '@tanstack/react-router'
import { Toaster as HotToaster } from 'react-hot-toast'
import { Provider as JotaiProvider } from 'jotai'
import { DevTools as JotaiDevTools } from 'jotai-devtools'
import { routeTree } from './routeTree.gen'
import 'jotai-devtools/styles.css'
import './index.css'

const params = new URLSearchParams(window.location.search)
export const debug = !!params.get('debug')

const hashHistory = createHashHistory()
const router = createRouter({
  routeTree, history: hashHistory,
})


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID

const metadata = {
  name:'dAcademy',
  description: 'dAcademy',
  url: 'https://dacade.my',
  icons: ['https://dacade.my/octopus%20icon.svg']
}

export const networks: [AppKitNetwork, AppKitNetwork] = (
  [optimism, optimismSepolia]
)

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId
})

createAppKit({
  adapters: [wagmiAdapter],
  networks,
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
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </WagmiProvider>
)

const root=document.getElementById('root')!
if(!root.innerHTML){
  createRoot(root).render(
    <StrictMode>
      <HotToaster position="bottom-center"/>
        <AppKitProvider>
          <JotaiProvider>
            <RouterProvider {...{ router }}/>
          <JotaiDevTools/>
          </JotaiProvider>
        </AppKitProvider>
    </StrictMode>,
  )
}

export default AppKitProvider