import express from 'express';
import {
  getAllProjects,
  createProject,
  searchProjects,
  getProjectDetailsWithTasks
} from '../controllers/projects_controller.js';
import { verificarToken } from '../middlewares/auth.js';

const projectroutes = express.Router();

// get all projects
projectroutes.get('/', verificarToken, getAllProjects);

// get project by id
projectroutes.get('/:projectId/details', getProjectDetailsWithTasks); 

// search project by name
projectroutes.get('/search', searchProjects);

// create project
projectroutes.post('/', createProject);



export { projectroutes };
