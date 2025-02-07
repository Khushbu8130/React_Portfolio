
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>

        <h1><b>KK</b></h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/khushbu-kumari-b727b525a/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='hover:text-blue-700' />
        </a>
        <a href='https://github.com/Khushbu8130' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='hover:text-gray-700' />
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
          <FaInstagram className='hover:text-pink-600' />
        </a>
        <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
          <FaSquareXTwitter className='hover:text-blue-500' />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;