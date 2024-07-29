import React from 'react'
import { motion } from 'framer-motion';
import {Tilt} from 'react-tilt';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';



const ServiceCard =({index,title})=>{
  return(
    <Tilt>
      <motion.div 
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full border border-purple-500 p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:2,
            speed:750,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 w-[250px] h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src="/assets/images/creative.png" alt="title" className='w-16 h-16 object-contain' />
          <h3 className='font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <section className='flex flex-col py-10 px-10'>
      <motion.div variants={textVariant()}>
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">What about</p>
        <h2 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">About us</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('','',0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Fluxbit Software is a dynamic tech powerhouse 
        specializing in crafting cutting-edge solutions
         for the digital world. From sleek websites to 
         robust desktop applications and seamless mobile
          experiences, we excel in delivering top-notch
           software tailored to meet your every need.
            With a passion for innovation and a commitment
             to excellence, Fluxbit Software is your 
             trusted partner in navigating the ever-evolving landscape of technology
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default About
