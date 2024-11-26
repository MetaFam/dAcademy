import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient, QueryClientProvider,
} from '@tanstack/react-query'
import {
  RouterProvider, createRouter, createHashHistory,
} from '@tanstack/react-router'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
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

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}