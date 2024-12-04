import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    members: Array
},{
    timestamps: true
});

export default mongoose.model('Chat', chatSchema);

