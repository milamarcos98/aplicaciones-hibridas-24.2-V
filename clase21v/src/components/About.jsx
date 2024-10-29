import React from 'react'
import {motion} from "framer-motion"
import { Link, useNavigate } from 'react-router-dom'


const aboutVariants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100vw", opacity: 0 },
};


const About = () => {
  const navigate = useNavigate();
  

  const navigation = () => {
    navigate("/contact")
  }

  return (
  //   <motion.div
  //   initial={{opacity: 0}}
  //   animate={{opacity: 1}}
  //   exit={{opacity: 0}}
  //   style={{padding: 20}}
  //   transition={{duration: 3}}
  // >
  <motion.div
    variants={aboutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{padding: 20}}
      // transition={{duration: 3}}
    >
      <button onClick={navigation}>Ir a contact</button>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, alias commodi est rem unde voluptatum possimus doloremque vel dolorem, aliquam inventore quisquam amet dolor ab. Iste ut explicabo officiis saepe.</p>
      <p>Deja tu consulta <Link to="/contact">aca</Link> </p>
  </motion.div>
  )
}

export {About}