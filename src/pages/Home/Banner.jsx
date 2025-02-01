
import React from 'react'
import { motion } from "framer-motion"
import banner from '../../images/banner/banner-4.jpg'

const Banner = () => {
  return (
    <div>
      <motion.div
        className='inset-0 z-15'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}>

        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Item 1</a></li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </motion.div>
      <div className='w-full h-screen flex items-center justify-center relative overflow-hidden inset-0'>
        <img
          src={banner}
          alt="banner"
          className='absolute inset-0 w-full h-full object-cover'
        >
        </img>

        {/* Green Frame Layer */}
        <motion.div
          className='absolute inset-0 bg-[#054637] flex items-center justify-center'
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }} // Start fully covering the background
          animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 5% 95%, 95% 95%, 95% 5%, 5% 5%, 5% 95%, 0% 100%)' }} // Reveal a rectangle gap in the center
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
        </motion.div>
        {/* Brand Name */}
        <motion.h1
          className='text-7xl font-bold text-white z-10 '
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          Stayza
        </motion.h1>
      </div>
    </div>
  )
}

export default Banner;