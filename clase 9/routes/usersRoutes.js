import express from "express"
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/usersController";

const router = express.Router();

// get all users
router.get('/', getAllUsers)

// get by id
router.get('/:id',getUserById)

// create user
router.post('/', createUser)

// update user
router.put('/:id', updateUser)

// delete user
router.delete('/:id', deleteUser)