// src/components/Top

import { Link } from '@tanstack/react-router'

const TopOrg = () => {
  return (
    <div className="fixed bottom-0 right-0 lg:pr-12 md:mt-8 md:pr-20">
      <Link to={'#top' as '/'} className="btn btn-ghost text-xl">
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7 7 7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7 7 7"
            />
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default TopOrg