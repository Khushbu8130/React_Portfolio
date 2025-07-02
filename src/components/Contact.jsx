import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6'

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
                
            <div className='text-center tracking-tighter'>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='my-4'>{CONTACT.address}</motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='my-4'>{CONTACT.phoneNo}</motion.p>
                <a href='#' className='border-b'>{CONTACT.email}</a>
            </div>

            
            {/* Social Media Icons */}
            <div className='mt-12 flex items-center justify-center gap-6 text-2xl'>
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
            
        </div>



    )
}

export default Contact
