import React from 'react'
import {motion} from "framer-motion"

const contactVariants = {
  initial: { y: "100vh", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100vh", opacity: 0 },
};


const Contact = () => {
  return (
    <motion.div
    variants={contactVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{padding: 20}}
      // transition={{duration: 3}}
    >
    <h2>Contact</h2>
    </motion.div>
  )
}

export {Contact}