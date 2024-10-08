import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '../components/Navbar'
import playbooks from '../playbooks.json'
import '../App.css'

export const Route = createRootRoute({
  
  component: () => {
    const sections = Object.keys(playbooks) as (keyof typeof playbooks)[];
    return (
    <>
      <Navbar sections={sections} />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
    )
  },
})