import Projects from '../models/projects.js';
import Tasks from '../models/tasks.js';

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProject = async (req, res) => {
  console.log(req.body)
  const project = new Projects({
    name: req.body.name,
    description: req.body.description,
    owner: req.body.owner 
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const searchProjects = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  try {
    const projects = await Projects.find({ name: { $regex: name, $options: 'i' } });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getProjectDetailsWithTasks = async (req, res) => {
  const { projectId } = req.params;
  const { name, status, sortBy, page = 1, limit = 10 } = req.query;

  try {
    const project = await Projects.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const query = { projectId };

    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }
    if (status) {
      query.status = status;
    }

    const tasks = await Tasks.find(query)
      .sort(sortBy ? { [sortBy]: 1 } : {})
      .skip((page - 1) * parseInt(limit))
      .limit(parseInt(limit));

    res.json({ project, tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
