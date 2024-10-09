import playbooks from '../playbooks.json'
import { Link } from '@tanstack/react-router'
import { toSlug } from './CarouselItem'


export const Navbar = () => (
  <nav className="sticky top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-[1001] shadow-md shadow-secondary px-0 sm:px-2 mb-4">
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
          <li><a>Support</a></li>
          <li>
            <a>Categories</a>
            <ul className="p-2">
              {playbooks.map((category, index) => (
                <li key={index}>
                  <Link to={`/#${toSlug(category.title)}`}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a>Submit</a>
          </li>
        </ul>
      </div>
    </div>
    <ul className="grow flex flex-col md:flex-row justify-center">
      <li>
        <Link to="/" className="btn btn-ghost text-xl">dAcademy</Link>
      </li>
      <li className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><a>Support</a></li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 z-10">
                  {playbooks.map((category, index) => (
                    <li key={index}>
                      <Link to={`/#${toSlug(category.title)}`}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li><a>Submit</a></li>
        </ul>
      </li>
      <li>
        <div className="navbar-end px-4"><w3m-button/></div>
      </li>
    </ul>
  </nav>
)

export default Navbar