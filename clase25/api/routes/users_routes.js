import express  from 'express';
import { getUsers, getUser, registerUser, loginUser } from '../controllers/users_controller.js';
import { verificarToken } from '../middlewares/auth.js';
const userRoutes = express.Router();

// get all users
userRoutes.get('/',  getUsers);

// get user by id
userRoutes.get('/find/:userId', getUser);

// register user
userRoutes.post('/register', registerUser);

// login user
userRoutes.post('/login', loginUser);


export {userRoutes};