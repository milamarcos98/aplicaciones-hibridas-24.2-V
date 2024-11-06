import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const TaskView = () => {
  const {id} = useParams();
  const [project, setProject] = useState({
    name: "",
    description: ""
  });
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);


  const fetchProjectDetails = async () => {
    setLoading(true)
    try{
      const res = await axios.get(`http://localhost:3000/projects/${id}/details`, {
        params:{
          name: search,
          status: filterStatus,
          sortBy: sort,
          page, 
          limit
        }
      })
      console.log(res.data)
      setProject(res.data.project)
      setTasks(res.data.tasks)
      setLoading(false)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProjectDetails()
  }, [id, search, filterStatus, sort, page, limit])

  if(loading) return <p>laoding...</p>

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export {TaskView}