import React from 'react';
import { HERO_CONTENT } from './constants/index';
import profilePic from './assets/my-pic.png';
import { motion, useInView } from 'framer-motion'; // Import useInView
import { useRef } from 'react';


const container =(delay) => ({
  hidden: {x:-100, opacity: 0 },
  hiddenright: {x:100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
  imgvisible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
});

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true }); // Use useInView to detect when in view

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              ref={ref} // Attach the ref to the motion.h1
              variants={container(0)} // Set the variants
              initial="hidden" // Set the initial state
              animate={isInView ? 'visible' : 'hidden'}

              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Haroon Aziz
            </motion.h1>
            <motion.span 
                  ref={ref} // Attach the ref to the motion.h1
                  variants={container(0.5)} // Set the variants
                  initial="hidden" // Set the initial state
                  animate={isInView ? 'visible' : 'hidden'}
                  
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p    ref={ref} // Attach the ref to the motion.h1
                  variants={container(1)} // Set the variants
                  initial="hidden" // Set the initial state
                  animate={isInView ? 'visible' : 'hidden'}
                  className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img       ref={ref} // Attach the ref to the motion.h1
              variants={container(1.5)} // Set the variants
              initial="hiddenright" // Set the initial state
              animate={isInView ? 'imgvisible' : 'hiddenright'}
              className="rounded-lg brightness-75" src={profilePic} alt="Haroon Aziz" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
