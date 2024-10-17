import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

const orgs = [
  {
    name: 'MetaGame',
    logo: 'https://bafybeia6d4mg4kd4xok772piolmvvpdd56usbabfmsqkzzg2qcr24orzsq.ipfs.w3s.link/metagame-logo.svg',
    slogan: 'MetaGame is the OG Shelf',
    slug:'metagame',
  },
  {
    name: 'Org 2',
    logo: '🕮',
    slogan: 'Org 2 is a new shelf',
    slug: 'org2',
  },
  {
    name: 'Org 3',
    logo: '🕮',
    slogan: 'Org 3 is another shelf',
    slug: 'org3',
  },
  {
    name: 'Org 4',
    logo: '🕮',
    slogan: 'Org 4 is a new shelf',
    slug: 'org4',
  },
  {
    name: 'Org 5',
    logo: '🕮',
    slogan: 'Org 3 is another shelf',
    slug: 'org5',
  },
  {
    name: 'Org 6',
    logo: '🕮',
    slogan: 'Org 6 is a new shelf',
    slug: 'org6',
  },
]

export const Route = createLazyFileRoute('/')({
  component: () => (
    <div>
      <h1 className="text-2xl font-bold text-secondary mt-8">Welcome to dAcademy!</h1>
      <h2 className="text-lg font-semibold mb-8">Learn, Verify, Achieve: Protocol for a Decentralized Education</h2>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1 rounded-sm">Current Organizations & Bookshelves</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow">
          {orgs.map((org) => (
            <li key={org.slug}>
              <Link to={`/org/${org.slug}`}>{org.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mx-8 md:flex-row md:flex-wrap md:justify-center items-center">
        {orgs.map((org) => (
          <div key={org.slug} className="w-full md:w-1/3 mb-8 md:mb-12">
            <div className="card bg-base-100 w-80 shadow-xl hover:shadow-secondary rounded-sm">
              <Link to={`/org/${org.slug}`}>
                <figure className="px-10 pt-10">
                  <img
                    src={org.logo}
                    alt="Org Logo"
                    className="w-48" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{org.name}</h2>
                  <p>{org.slogan}</p>
                  <div className="card-actions">
                    {/* <button className="btn btn-primary">Visit {org.name}'s Shelf</button> */}
                    {/* add in topic badges
                    add in attestation reactions or hearts */}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
})