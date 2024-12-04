import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  const navigate = useNavigate();

  const {user, setUser, auth, logoutUser} = useContext(AuthContext)

  // console.log(user)
  // setUser({name: 'Elena', age: 25})
  // console.log(user)

  useEffect(() => {
    if(debouncedSearch){
      handleSearch(debouncedSearch)
    }else{
      setSuggestions([])
    }
  }, [debouncedSearch])

  const fetchProjects = async () => {
    try{
      const res = await axios.get('http://localhost:3000/projects', {
        headers: {'token': auth}
      });
      console.log(res)
      setProjects(res.data)
    }catch(err){
      // console.error(err)
      setError(err.response.data.error)
      setTimeout(() => {
        logoutUser();
        navigate("/login")
      }, 2500)
    }
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  const handleAddProject = async (e) => {
    console.log(user)
    e.preventDefault();
    const newProject = {
      name,
      description,
      owner:{
        userId: user.id,
        username: user.username
      }
    }
    try{
      // fetch // axios
      await axios.post('http://localhost:3000/projects', newProject)
      fetchProjects();
      setName('');
      setDescription('')
    }catch(err){
      console.error(err)
    }
  }

  const handleSearchChange = async (e) => {{
    const value = e.target.value;
    setSearch(value);
  }}

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    handleSearch(suggestion)
  }

  const handleSearch = async (searchTerm) => {
    console.log(searchTerm)
    try{
      const res = await axios.get('http://localhost:3000/projects/search', {
        params: {
          name: searchTerm
        }
      })
      setProjects(res.data);
      setSuggestions([]);
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Projects</h1>
      {error && <h2>{error}</h2>}
      <form onSubmit={handleAddProject}>
        <input 
          type="text" 
          placeholder='project name' 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='project description' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>Add project</button>
      </form>

      <form >
        <input type="text" placeholder='search by name' value={search} onChange={handleSearchChange} />
        <button type='submit'>Search</button>
        {
          suggestions.length > 0 && (
            <ul>
              {
                suggestions.map((suggestion) => (
                  <li key={suggestion._id} onClick={() => handleSuggestionClick(suggestion.name)}>
                    {suggestion.name}
                  </li>
                ))
              }
            </ul>
          )
        }
      </form>

      <ul>
        {
          projects.map(project => (
            <li key={project}>
              List: <Link to={`/taskview/${project._id}`}>{project.name}</Link> - 
              Board: <Link to={`/taskboard/${project._id}`}>{project.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export {Home}