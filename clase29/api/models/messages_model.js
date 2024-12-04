import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    chatId: String,
    senderId: String,
    text: String,
},{
    timestamps: true
});

export default mongoose.model('Messages', messagesSchema);

