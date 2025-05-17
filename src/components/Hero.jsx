
import React, { useEffect, useState } from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/khushbu.jpeg";
import { motion } from 'framer-motion';

// Hook to detect mobile view
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    const isMobile = useIsMobile();
    const imageX = isMobile ? 0 : -150;

    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Khushbu Kumari
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial='hidden'
                            animate='visible'
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent'>
                            MERN stack-developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-4 lg:p-8">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: imageX, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilePic}
                        alt="Khushbu Kumari"
                        className="w-53 h-53 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[340px] lg:h-[340px] object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
