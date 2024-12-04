import messages_model from '../models/messages_model.js';

const createMessage = async (req, res) => {
    const {chatId, senderId, text} = req.body;
  try {
   const newMessage = new messages_model({
    chatId,
    senderId,
    text
   })
   const resposne = await newMessage.save();
   res.status(200).json(resposne)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  };


  const getMessages = async (req, res) => {
    const chatId = req.params.chatId;
  try {
   const messages = await messages_model.find({chatId})
   res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  };

export {
    createMessage,
    getMessages
};
