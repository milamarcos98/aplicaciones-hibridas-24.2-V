import React from 'react'
import {Link, Outlet} from "react-router-dom"

const Admin = () => {
  return (
    <div>
        <h2>Admin Panel</h2>
        <nav>
            <ul>
                <li><Link to="dashboard">Dashboard</Link></li>
                <li><Link to="settings">Settings</Link></li>
            </ul>
        </nav>
        {/* renderizar aca */}
        <Outlet/>
    </div>
  )
}

export {Admin}