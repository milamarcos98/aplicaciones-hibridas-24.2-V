import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import Modal from '../../components/Modal/Modal'

const TaskView = () => {
  const {id} = useParams();

  const [project, setProject] = useState({
    name:"",
    description:""
  });
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const fetchProjectDetails = async () => {
    setLoading(true)
    try{
      const res = await axios.get(`http://localhost:3000/projects/${id}/details`, {
        params: {
          name: search,
          status: filterStatus,
          sortBy: sort,
          page,
          limit
        }
      });
      console.log(res.data);
      setProject(res.data.project)
      setTasks(res.data.tasks)
      setLoading(false)
    }catch(err){
      setError(err.message)
      setLoading(false)
      console.error(err)
    }
  }

  useEffect(() => {
    fetchProjectDetails();
  }, [id, search, filterStatus, sort, page, limit])

  const handleTaskSaved = () => {
    fetchProjectDetails();
  }

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setShowModal(true)
  }

  const handleDeleteTask = async (taskId) => {
    if(window.confirm('Are you sure you want to delete this task?')){
      try{
        await axios.delete(`http:///localhost:3000/tasks/${taskId}`);
        fetchProjectDetails();
      }catch(err){
        console.log(err)
      }
    }
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }


  if(loading) return <p>loading...</p>;
  if(error) return <p>{error}</p>;

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      {/* add tasks */}
      <button onClick={() =>{setCurrentTask(null); setShowModal(true)}}>Add task</button>
      {
        showModal && (
          <Modal
            task={currentTask}
            projectId={id}
            onClose={() => setShowModal(false)}
            onTaskSaved={handleTaskSaved}
          />
        )
      }
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="status">Status</option>
      </select>
      {/* view tasks */}
      <ul>
        {
          tasks.map((task) => (
            <li key={task._id}>
              <span>{task.name}: {task.description}</span>
              <button onClick={() => handleEditTask(task)}>Edit</button>
              <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <div className="pagination">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Prev</button>
        <button onClick={() => handlePageChange(page + 1)} disabled={tasks.length <= limit}>Next</button>
      </div>
    </div>
  )
}

export {TaskView}