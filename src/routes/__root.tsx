import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '../components/Navbar'
import '../App.css'
import { BookContextProvider } from '../BookContext'

export const Route = createRootRoute({

  component: () => {
    return (
    <>
      <Navbar  />
      <BookContextProvider>
        <Outlet />
      </BookContextProvider>
      <TanStackRouterDevtools />
    </>
    )
  },
})