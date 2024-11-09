import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CiHeart, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const Titles = {
      "/": "Home | Gadget Heaven",
      "/statistics": "Statistics | Gadget Heaven",
      "/dashboard": "Dashboard | Gadget Heaven",
    };
    document.title = Titles[location.pathname] || "Gadget Heaven";
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";

  return (
    <div className='mb-4 mt-6 rounded-xl text-white relative z-40 max-w-screen-2xl '>
      <div className="navbar text-black">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'bg-purple-500 text-white' : ''}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) => isActive ? 'bg-purple-500 text-white' : ''}
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => isActive ? 'bg-purple-500 text-white' : ''}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) => isActive ? 'bg-purple-500 text-white' : ''}
              >
                Contact Us
              </NavLink>
            </li>
            </ul>
          </div>
          <p className={`text-2xl font-bold ${isHomePage ? 'text-white' : 'text-black'}`}>
            Gadget Heaven
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 ${isHomePage ? 'text-white' : 'text-black'}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'bg-purple-500 text-white' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) => isActive ? 'bg-purple-500 text-white' : ''}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => isActive ? 'bg-purple-500 text-white' : ''}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) => isActive ? 'bg-purple-500 text-white' : ''}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className='border-2 rounded-full mr-2'>
            <CiShoppingCart className={`text-4xl mr-4 m-2 ${isHomePage ? 'text-white' : 'text-black'}`} />
          </div>
          <div className='border-2 rounded-full'>
            <CiHeart className={`text-4xl  m-2 ${isHomePage ? 'text-white' : 'text-black'}`} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
