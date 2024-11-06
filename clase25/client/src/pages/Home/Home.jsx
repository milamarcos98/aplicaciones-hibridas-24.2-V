import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const fetchProjects = async () => {
    try{
      const res = await axios.get('http://localhost:3000/projects')
      console.log(res.data)
      setProjects(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])


  // https://axios-http.com/es/docs/intro
  const handleAddProject = async (e) => {
    e.preventDefault();
    const newProject = {
      name,
      description,
      owner: {
        userId: "user",
        username: "user"
      }
    }
    try{
      await axios.post('http://localhost:3000/projects', newProject)
      // fetchprojects
      setName('')
      setDescription('')
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Projects</h1>
      <form onSubmit={handleAddProject}>
        <input 
          type="text" 
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {
          projects.map((project) => (
            <li key={project._id}>
              <Link to={`/taskview/${project._id}`}>{project.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export {Home}