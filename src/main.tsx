import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { mainnet, optimism } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'


const queryClient = new QueryClient()


const projectId = 'process.env.VITE_PUBLIC_PROJECT_ID'


const metadata = {
  name: 'retest1',
  description: 'AppKit Example',
  url: 'https://web3modal.com', 
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

export const networks = [mainnet, optimism]


const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  networks,
  projectId
})


createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, optimism],
  metadata,
  projectId,
  features: {
    analytics: true,
    email: false,
    socials: [ 'x', 'farcaster', 'discord' ],
    emailShowWallets: false,
  }
})

const AppKitProvider= (
  { children, initialState }: { children: ReactNode; initialState?: State }
) => (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppKitProvider initialState={undefined}>
    <App />
    </AppKitProvider>
  </StrictMode>,
)

export default AppKitProvider