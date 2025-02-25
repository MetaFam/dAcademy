import { StrictMode, ReactNode } from'react'
import { createRoot } from'react-dom/client'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import {
  AppKitNetwork, hardhat, optimism, optimismSepolia
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
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { routeTree } from './routeTree.gen'
import 'jotai-devtools/styles.css'
import './styles/index.css'

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

export const networks: [AppKitNetwork, AppKitNetwork, AppKitNetwork] = (
  [optimism, optimismSepolia, hardhat]
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

const helmetContext = {}

const root=document.getElementById('root')!
if(!root.innerHTML){
  createRoot(root).render(
    <StrictMode>
      <HotToaster position="bottom-center"/>
      <AppKitProvider>
        <JotaiProvider>
          <HelmetProvider context={helmetContext}>
            <Helmet>
              <title>dAcademy</title>
              <meta charSet="UTF-8"/>
              <link rel="icon" type="image/svg+xml" href="/inner-d.svg"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta property="og:title" content="dAcademy"/>
              <meta property="og:description" content="A de-store of knowledge. Learn, Verify, Achieve: Protocol for a Decentralized Education"/>
              <meta property="og:image" content="/dacademy-logo.png"/>
              <meta property="og:url" content="https://dacade.my"/>
              <meta property="og:site_name" content="dAcademy"/>
            </Helmet>
            <RouterProvider {...{ router }}/>
            <JotaiDevTools/>
          </HelmetProvider>
        </JotaiProvider>
      </AppKitProvider>
    </StrictMode>,
  )
}

export default AppKitProvider