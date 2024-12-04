import chat_model from '../models/chat_model.js';

const createChat = async (req, res) => {
    const {firstId, secondId} = req.body;
  try {
   const chat = await chat_model.findOne({
    members: {$all: [firstId, secondId]}
   })
   if(chat) return res.status(200).json(chat);
   const newChat = new chat_model({
    members: [firstId, secondId]
   })
   const resposne = await newChat.save();
   res.status(200).json(resposne)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  };

  const findUserChats = async (req, res) => {
    const userId = req.params.userId;
  try {
   const chats = await chat_model.find({
    members: {$in :[userId]}
   })
   res.status(200).json(chats)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  };

  const findChat = async (req, res) => {
    const {firstId, secondId} = req.params;
  try {
   const chats = await chat_model.find({
    members: {$all :[firstId, secondId]}
   })
   res.status(200).json(chats)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  };


export {
  createChat,
  findUserChats,
  findChat
};
