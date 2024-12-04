import express from 'express';
import {
  getTasksByProjectId,
  createTask,
  getTaskById,
  updateTask,
  updateTaskStatus,
  deleteTask
} from '../controllers/tasks_controller.js';

const taskroutes = express.Router();

// get tasks by project
taskroutes.get('/project/:projectId', getTasksByProjectId);

// get task by id
taskroutes.get('/:id', getTaskById);

// create a task
taskroutes.post('/', createTask);

// update task
taskroutes.put('/:id', updateTask);

// update only status
taskroutes.patch('/:id/status', updateTaskStatus);

// delete task by id
taskroutes.delete('/:id', deleteTask);

export { taskroutes };
