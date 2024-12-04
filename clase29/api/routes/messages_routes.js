import express  from 'express';
import {createMessage,getMessages} from "../controllers/messages_controllers.js"

const messageRoutes = express.Router();

messageRoutes.post('/', createMessage);
messageRoutes.get('/:chatId', getMessages);


export {messageRoutes};