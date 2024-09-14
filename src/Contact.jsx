import React from 'react'
import { CONTACT } from './constants'
import { motion, useInView } from 'framer-motion'; // Import useInView

const Contact = () => {
  return (
    <div className="border-b  border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5  }}
        className="my-10 text-center text-4xl hover:text-neutral-500 transition-all duration-300 ease-in-out">Get in Touch</motion.h1>
        <div className="mb-5 text-center tracking-tighter">
        <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="my-4">{CONTACT.phoneNo}</motion.p>
       <motion.a 
       whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
       href="haroonaziz295@gamil.com" className="border-b ">{CONTACT.email}</motion.a>

        </div>
        </div>
  )
}

export default Contact