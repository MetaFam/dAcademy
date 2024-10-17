import { createLazyFileRoute } from '@tanstack/react-router'

const orgs = [
  {
    name: 'MetaGame',
    logo: 'https://bafybeia6d4mg4kd4xok772piolmvvpdd56usbabfmsqkzzg2qcr24orzsq.ipfs.w3s.link/metagame-logo.svg',
    slogan: 'MetaGame is the OG Shelf',
    slug: 'metagame',
  },
]
export const Route = createLazyFileRoute('/')({
  component: () => (
    <div>
      <h1 className="text-2xl font-bold text-secondary mt-8">Welcome to dAcademy!</h1>
      <h2 className="text-lg font-semibold text-primary mt-2 mb-8">Here is a subdescription</h2>
      <ul>
        {orgs.map((org) => (
          <li className="card bg-base-100 w-96 shadow-xl hover:shadow-secondary">
            <a href={`/org/${org.slug}`}>
              <figure className="px-10 pt-10">
                <img
                  src={org.logo}
                  alt="Org Logo"
                  className="rounded-xl" />
              </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-lg font-medium">{org.name}</h2>
                  <p>{org.slogan}</p>
                  <div className="card-actions">
                    {/* <button className="btn btn-primary">Visit {org.name}'s Shelf</button> */}
                  </div>
                </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  ),
})
