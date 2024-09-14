import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: 0,
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  const ref = useRef(null); // Create a reference for the container div
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 }); // Correct usage of useInView

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 
          whileInView={{ opacity: 20, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: .5 ,"Linear": 1.5 }}

      className="my-20 text-center text-4xl hover:text-neutral-500 transition-all duration-300 ease-in-out">
        Technologies
      </motion.h1>
      <motion.div
        ref={ref} // Attach the ref to monitor visibility
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}} // Animate only if in view
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-2 border-neutral-800 p-2"
        >
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-2 border-neutral-800 p-2"
        >
          <FaHtml5 className="text-4xl text-red-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-2 border-neutral-800 p-2"
        >
          <FaCss3 className="text-4xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(4.7)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-2 border-neutral-800 p-2"
        >
          <FaJs className="text-4xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-2 border-neutral-800 p-2"
        >
          <FaNodeJs className="text-4xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.1)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-2 border-neutral-800 p-2"
        >
          <DiMongodb className="text-4xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
