import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
    </nav>
  )
}

export {Navbar}