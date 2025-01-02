import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { FormEvent } from 'react'
import { useAccount } from 'wagmi'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Route = createLazyFileRoute('/user/')({
  component: () => {
    const { address, status } = useAccount()
    const navigate = useNavigate()
    const lookup = (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault()
      const data = new FormData(evt.target as HTMLFormElement);
      const user = data.get('user') as string | null;
      if (user) {
        navigate({ to: `/user/${user}` })
      }
    }
    switch (status) {
      case 'connected': {
        navigate({ to: `/user/${address}` })
        break
      }
      default: {
        return (
          <section className="flex flex-col items-center justify-center h-screen">
            <h1 id="login" className="text-xl font-bold mb-4">To access your profile</h1>
            <div className="flex justify-center mt-4">
              <w3m-button />
            </div>
            <hr className="my-24 w-full" />
            <form className="mb-40 flex flex-col items-center" onSubmit={lookup}>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input required name="user" placeholder="ENS or address to view" />
                <Button>Lookup</Button>
              </div>
            </form>
          </section>
        )
      }
    }
  }
})