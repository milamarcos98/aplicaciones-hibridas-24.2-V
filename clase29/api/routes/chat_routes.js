import express  from 'express';
import {createChat, findUserChats, findChat} from "../controllers/chat_controllers.js"

const chatRoutes = express.Router();

chatRoutes.post('/', createChat);
chatRoutes.get('/:userId', findUserChats);
chatRoutes.get('/find/:firstId/:secondId', findChat);


export {chatRoutes};