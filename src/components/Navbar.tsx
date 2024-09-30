import React from 'react';

<div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2 mb-4">
        <div className="navbar-start">
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
                <a>Support</a>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2">
                <li>
                    <a>Meta - Game-b</a>
                  </li>
                  <li>
                    <a>Web3 General</a>
                  </li>
                  <li>
                    <a>DAO Playbooks</a>
                  </li> 
                  <li>
                    <a>Self Actualization</a>
                  </li>
                  <li>
                    <a>Building Chain by Chain</a>
                  </li>
                  <li>
                    <a>ReFi</a>
                  </li>
                  <li>
                    <a>Random Skills</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Submit</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">dAcademy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Support</a>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 z-10">
                  <li>
                    <a>Meta - Game-b</a>
                  </li>
                  <li>
                    <a>Web3 General</a>
                  </li>
                  <li>
                    <a>DAO Playbooks</a>
                  </li> 
                  <li>
                    <a>Self Actualization</a>
                  </li>
                  <li>
                    <a>Building Chain by Chain</a>
                  </li>
                  <li>
                    <a>ReFi</a>
                  </li>
                  <li>
                    <a>Random Skills</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Submit</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end px-4">
          <w3m-button className="btn btn-sm pr-16 rounded" />
        </div>
      </div>