import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '../components/Navbar'
import '../App.css'

export const Route = createRootRoute({

  component: () => {
    return (
    <>
      <Navbar  />
      <Outlet />
      <TanStackRouterDevtools />
    </>
    )
  },
})