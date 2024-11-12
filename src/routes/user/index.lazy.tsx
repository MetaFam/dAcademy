import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { FormEvent } from 'react'
import { useAccount } from 'wagmi'

export const Route = createLazyFileRoute('/user/')({
  component: () => {
    const { address, status } = useAccount()
    const navigate = useNavigate()
    const lookup = (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault()
      const data = new FormData(evt.target as HTMLFormElement);
      console.log(data.get('user'))
      navigate({ to: `/user/${data.get('user')}`})
    }
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
        <hr className="my-24"/>
        <form className="mb-40" onSubmit={lookup}>
        <input name="user" placeholder="ENS name or address to view" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-sm btn-secondary ml-4">Lookup</button>
        </form>
        </section>

        )
      }
    }
  }
})
