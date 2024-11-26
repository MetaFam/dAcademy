// src/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Navbar } from '@/components/Navbar';

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <hr className="dark:border-slate-700" />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});