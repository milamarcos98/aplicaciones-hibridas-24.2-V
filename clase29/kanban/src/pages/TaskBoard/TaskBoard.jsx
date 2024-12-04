import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './TaskBoard.scss'

const TaskBoard = () => {
  const {id} = useParams()
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    blocked: [],
    done: []
  })

  useEffect(() => {
    const fetchTasks = async () => {
      try{
        const response = await axios.get(`http://localhost:3000/tasks/project/${id}`);
        const categorizedTasks = {
          todo: [],
          doing: [],
          blocked: [],
          done: []
        };

        response.data.forEach(task => {
          if(task.status === 'to do') categorizedTasks.todo.push(task);
          else if(task.status === 'doing') categorizedTasks.doing.push(task);
          else if(task.status === 'blocked') categorizedTasks.blocked.push(task);
          else if(task.status === 'done') categorizedTasks.done.push(task);
        });

        setTasks(categorizedTasks);
      }catch(error){
        console.log(error)
      }
    }

    fetchTasks()
  }, [])

  // DRAG

  const onDragOver = (event) => {
    event.preventDefault()
  }

  const onDragStart = (event, task, sourceColumn) => {
    event.dataTransfer.setData('task', JSON.stringify(task));
    event.dataTransfer.setData('sourceColumn', sourceColumn);
  }

  const onDrop = async (e, destinedColumn) => {
    // console.log("drop",e);ç
    const task = JSON.parse(e.dataTransfer.getData('task'));
    const sourceColumn = e.dataTransfer.getData('sourceColumn');
    console.log(task)
    console.log(sourceColumn)

    if(sourceColumn === destinedColumn) return;

    const sourceTasks = tasks[sourceColumn].filter(t => t._id !== task._id);
    const destindedTasks = [...tasks[destinedColumn], {...task, status: destinedColumn}]

    setTasks({
      ...tasks,
      [sourceColumn]: sourceTasks,
      [destinedColumn]: destindedTasks
    })

    try{
      await axios.patch(`http://localhost:3000/tasks/${task._id}/status`, {
        status: destinedColumn == 'todo' ? 'to do': destinedColumn
      });
      
    }catch(error){
      console.log(error)
    }

    // blocked
    // [
    //   tarea 1
    //   tarea 2
    //   tarea 3
    //   tarea 4 - status: blocked
    // ]
  }

  return (
    <div className='task-board'>
      {
        ['todo', 'doing', 'blocked', 'done'].map((column) => (
          <div
            key={column}
            className='task-column'
            onDragOver={onDragOver}
            onDrop={(e) =>  onDrop(e, column)}
          >
            <h2>{column.toUpperCase()}</h2>
            <div>
              {tasks[column].map((task) => (
                <div
                  className='task-card'
                  key={task._id}
                  draggable
                  onDragStart={(e) => onDragStart(e, task, column)}
                >
                  {task.name}
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export {TaskBoard}