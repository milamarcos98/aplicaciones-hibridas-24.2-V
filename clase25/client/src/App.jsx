import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, TaskBoard, TaskView } from './pages'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/taskboard/:id" element={<TaskBoard/>} />
      <Route path="/taskview/:id" element={<TaskView/>} />
    </Routes>
    </>
  )
}

export default App
