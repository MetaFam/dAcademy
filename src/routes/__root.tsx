import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navbar from '../components/Navbar'
import '../App.css'
// import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: () => {
    return (
    <>
      <Navbar/>
      <Outlet/>
      {/* <TanStackRouterDevtools/> */}
      {/* <Footer/> */}
    </>
    )
  },
})
