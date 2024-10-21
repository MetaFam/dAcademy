import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useAccount } from 'wagmi'

export const Route = createLazyFileRoute('/user/')({
  component: () => {
    const { address, status } = useAccount()
    const navigate = useNavigate()
      switch(status) {
        case 'connected': {
          navigate({ to: `/user/${address}`})
          break
        }
        default: {
          return (
          <section>
          <h1 id="login">To access your profile</h1>
          <div className="flex justify-center mt-4"><w3m-button /></div>
          </section>
          )
        }
      }
  }
})
