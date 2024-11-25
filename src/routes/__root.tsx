// src/Route.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import '../index.css'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 dark:bg-slate-800 dark:text-white">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr className="dark:border-slate-700" />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});