// import playbooks from '../playbooks.json'
import { Link } from '@tanstack/react-router'
// import { toSlug } from './CarouselItem'
import { useEffect } from 'react'
import Logo from '#/assets/logo.svg?raw'

export const Navbar = () => {
  useEffect(() => {
    const clicked = (evt: MouseEvent) => {
      let { target: node } = evt
      while(node && (node as HTMLElement).tagName !== 'DETAILS') {
        node = (node as Node).parentNode
      }
      if(!node) {
        document.querySelectorAll('details').forEach(
          (details) => details.removeAttribute('open')
        )
      }
    }

    document.addEventListener('click', clicked)
    return () => document.removeEventListener('click', clicked)
  })

  return (
    <nav className="sticky top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-[1001] shadow-md shadow-secondary px-0 sm:px-2 mb-4 max-w-[97%] mx-auto">
      <div className="justify-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={`/user`}>Profile</Link>
            </li>
            <li>
              <a>Bookshelves</a>
              <ul className="p-2">
                  <li>
                    by : Organization
                  </li>
              </ul>
            </li>
            <li>
              <button
              data-tally-open="mOJvyK"
              data-tally-layout="modal"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave">
                Join as an Org
              </button>
            </li>
          </ul>
        </div>
      </div>
      <ul className="grow flex flex-col md:flex-row justify-center">
        <li>
          <Link
            to="/"
            dangerouslySetInnerHTML={{ __html: Logo }}
            className="btn btn-ghost text-secondary"
          />
        </li>
        <li className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={`/user`}>Profile</Link>
            </li>
            <li>
              <details>
                <summary>Bookshelves</summary>
                <ul className="p-2">
                  <li>
                    <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="m-1">by : Organization</div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><Link to={'/org/metagame' as '/'}>MetaGame</Link></li>
                        <li><a>Org 2</a></li>
                        <li><a>Org 3</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="m-1">by : User Curation</div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </details>
            </li>
              <li>
                <button
                data-tally-open="mOJvyK"
                data-tally-layout="modal"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave">
                  Join as an Org
                </button>
              </li>
          </ul>
        </li>
        <li>
          <div className="navbar-end px-4">
            <w3m-button balance="hide"/>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar