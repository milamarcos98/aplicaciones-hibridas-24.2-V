import mongoose  from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  assignedUser: {
    userId: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    enum: ['to do', 'doing', 'blocked', 'done'],
    default: 'to do'
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  startDate: { 
    type: Date, 
    required: true 
  },
  endDate: { 
    type: Date, 
    required: true 
  },
});

export default mongoose.model('Tasks', TaskSchema);
