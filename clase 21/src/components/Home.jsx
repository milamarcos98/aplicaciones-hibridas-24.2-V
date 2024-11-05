import React, { useState } from 'react'
import {motion} from "framer-motion"

const homeVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const Home = () => {
  const [IsOpen, setIsOpen] = useState(false)
  return (
    <motion.div
    variants={homeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{padding: 20}}
      // transition={{duration: 3}}
    >
      <h2>Home</h2>

      <motion.button whileHover={{scale: 1.1}} onClick={() => setIsOpen(!IsOpen)}>
        {IsOpen ? "Cerrar" : "Abrir"}
      </motion.button>

      <motion.div
        initial={{height: 0, opacity: 0}}
        animate={{height: IsOpen ? 50 : 0, opacity: IsOpen ? 1 : 0}}
        transition={{duration: 0.5}}
      >
        <p>mostrar texto</p>
      </motion.div>

    </motion.div>
  )
}

export {Home}