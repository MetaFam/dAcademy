import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useAccount } from 'wagmi'

export const Route = createLazyFileRoute('/upload/')({
  component: () => {
    const { address, status } = useAccount()
    const navigate = useNavigate()
    switch (status) {
      case 'connected': {
        navigate({ to: `/upload/${address}` })
        break
      }
      default: {
        return (
          <section>
            <h1 id="login">To access your Upload Hub</h1>
            <div className="flex justify-center mt-4">
              <w3m-button />
            </div>
          </section>
        )
      }
    }
  }
})
