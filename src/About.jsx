import React from 'react';
import aboutImg from './assets/about.jpg';
import { ABOUT_TEXT } from './constants';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Fixed the spelling of container function
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  hiddenright: { x: 100, opacity: 0 },
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
      delay: delay,
      duration: 1.5,
    },
  },
});

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center ">
            <motion.img
              ref={ref}
              variants={container(0)} // Used the corrected container function
              initial="hidden"
              animate={isInView ? 'imgvisible' : 'hidden'}
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p              
              ref={ref}
              variants={container(0)} // Used the corrected container function
              initial="hiddenright"
              animate={isInView ? 'visible' : 'hiddenright'}
            className="my-2 max-w-xl py-6">{ABOUT_TEXT}</motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
