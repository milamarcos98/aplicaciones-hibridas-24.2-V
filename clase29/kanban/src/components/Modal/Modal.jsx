import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Modal.scss';

const Modal = ({ task, projectId, onClose, onTaskSaved }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const newTask = {
        name, 
        description,
        assignedUser:{
          userId: "user",
          username: "username"
        },
        status,
        startDate,
        endDate,
        projectId
      }

      if(task){
        // put
        await axios.put(`http:///localhost:3000/tasks/${task._id}`, newTask)
      }else{
        // post
        await axios.post('http:///localhost:3000/tasks', newTask)
      }

      onTaskSaved();
      onClose()
      
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{task ? 'Edit Task' : 'Add New Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label>Assigned User</label>
            <input type="text" value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)} required /> 
          </div>
          <div>
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option disabled selected value="">status</option>
            <option value="to do">to do</option>
            <option value="doing">doing</option>
            <option value="blocked">blocked</option>
            <option value="done">done</option>
              </select>
          </div>
          <div>
            <label>Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
          </div>
          <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
