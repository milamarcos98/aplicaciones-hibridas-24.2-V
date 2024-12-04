import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Home, TaskBoard, TaskView } from './pages'
import { Route, Routes } from 'react-router-dom'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Chat from './pages/Chat/Chat'
import { ChatContextProvider } from './context/ChatContext'
import { AuthContext } from './context/AuthContext'

function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <ChatContextProvider user={user}>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/taskview/:id" element={<TaskView/>}/>
          <Route path="/taskboard/:id" element={<TaskBoard/>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </ChatContextProvider>
    </>
  )
}

export default App
