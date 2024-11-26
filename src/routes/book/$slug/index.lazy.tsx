import { createLazyFileRoute, useLocation, useNavigate } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/book/$slug/')({
  component: () => {
    const navigate = useNavigate()
    const location = useLocation()
    if(!/\d$/.test(location.pathname)) {
      navigate({to: `${location.pathname}/0`})
    }
  },
})