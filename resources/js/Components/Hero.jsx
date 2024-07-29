import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
   <>
    <div className='h-screen flex justify-center items-center  w-full relative mx-auto'>
        
        <div className='flex mx-10 mt-5 w-full justify-between items-center'>
            <h1 className='text-7xl text-center font-bold'>Unleash your <br /><span className='text-purple-500 font-bolder'> Creativity </span> </h1>
            <div>
                <img src="/assets/images/creative.png" alt="main image" className='mr-10 w-80 '/>
            </div>
        </div>
    </div>
   
    <div className="absolute bottom-10 xs:bottom-1 w-full flex justify-center items-center">
        <div className='w-[35px] h-[64px] p-2 flex justify-center border-4 border-secondary rounded-full '>
            <motion.div 
                animate={{ y:[0,24,0] }}
                transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                }}
                className='w-3 h-3 rounded-full bg-white mb-1'
            />

        </div>

    </div>
   </>
  )
}

export default Hero
