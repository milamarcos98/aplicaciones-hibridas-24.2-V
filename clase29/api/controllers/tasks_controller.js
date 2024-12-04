import Tasks from '../models/tasks.js';

export const getTasksByProjectId = async (req, res) => {
  const { projectId } = req.params;

  const query = { projectId };

  try {
    const tasks = await Tasks.find(query)

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const createTask = async (req, res) => {
  const task = new Tasks({
    name: req.body.name,
    description: req.body.description,
    assignedUser: req.body.assignedUser,
    status: req.body.status,
    projectId: req.body.projectId,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' });
    }

    console.log(req.body)

    task.name = req.body.name ?? task.name;
    task.description = req.body.description ?? task.description;
    task.assignedUser = req.body.assignedUser ?? task.assignedUser;
    task.status = req.body.status ?? task.status;
    task.projectId = req.body.projectId ?? task.projectId;
    task.startDate = req.body.startDate ?? task.startDate;
    task.endDate = req.body.endDate ?? task.endDate;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.status = req.body.status;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Tasks.findByIdAndDelete(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
