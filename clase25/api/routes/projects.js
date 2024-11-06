import express from 'express';
import {
  getAllProjects,
  createProject,
  searchProjects,
  getProjectDetailsWithTasks
} from '../controllers/projects_controller.js';

const projectroutes = express.Router();

// get all projects
projectroutes.get('/', getAllProjects);

// get project by id
projectroutes.get('/:projectId/details', getProjectDetailsWithTasks); 

// search project by name
projectroutes.get('/search', searchProjects);

// create project
projectroutes.post('/', createProject);



export { projectroutes };
