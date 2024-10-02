import { StrictMode } from'react'
import { createRoot } from'react-dom/client'
import App from './App.tsx'
import Book from './pages/book.tsx'
import './index.css'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { mainnet, optimism } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { BrowserRouter, Routes, Route } from'react-router-dom'

import { ReactNode } from'react'

const queryClient = new QueryClient()

const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID

const metadata = {
  name:'retest1',
  description: 'AppKit Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppKitProvider>
        <Routes>
          <Route path="/book" element={<Book />} />
          <Route path="/" element={<App />} />
        </Routes>
      </AppKitProvider>
    </BrowserRouter>
  </StrictMode>,
)

export default AppKitProvider