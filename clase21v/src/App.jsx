import React, {Suspense} from 'react'
import './App.css'
import {AnimatePresence} from "framer-motion"
import {Routes, Route} from "react-router-dom"
import { About, Admin, Contact, Dashboard, Home, Navbar, Settings, UserProfile } from './components'

function NotFound(){
  return <h2>404: Not found</h2>
}

// lazy loading

function App() {

  return (
    <>
    <Navbar/>

    <AnimatePresence mode='wait'>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:id' element={<UserProfile/>} />

      {/* admin routes */}
      <Route path='/admin-panel' element={<Admin/>} >
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='settings' element={<Settings/>} />
      </Route>

      {/* default */}
      <Route path='*' element={<NotFound/>} />
    </Routes>
    {/* </Suspense> */}
    </AnimatePresence>
    </>
  )
}

export default App
