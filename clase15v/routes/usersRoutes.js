import express from "express"
import { getAllUsers, getUserById, createUser, loginUser, updateUser, deleteUser } from "../controllers/usersController.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const secretKey = process.env.SECRET;

const router = express.Router();

const auth = (req, res, next) => {
    const getToken = req.headers.authorization;

//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJjYW1pbGFAZ21haWwuY29tIiwiaWF0IjoxNzI2NzA4NjQ1LCJleHAiOjE3MjY3MTIyNDV9.yY6qeknQ4SKxLiARA9-HyV_2dIXVCRP8AjT0f91q0J0"

// ["Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJjYW1pbGFAZ21haWwuY29tIiwiaWF0IjoxNzI2NzA4NjQ1LCJleHAiOjE3MjY3MTIyNDV9.yY6qeknQ4SKxLiARA9-HyV_2dIXVCRP8AjT0f91q0J0"]
    if(getToken){
        const token = getToken.split(" ")[1];
        jwt.verify(token, secretKey, (err, paylod) => {
            if(err){
                return res.sendStatus(403)
            }
            // console.log(paylod)
            req.user = {id: paylod.id, email: paylod.email}
            next()
        })
    }
}

// get all users
router.get('/', auth, getAllUsers)

// get by id
router.get('/:id', auth, getUserById)

// create user
router.post('/', createUser)

// login user
router.post('/login', loginUser)

// update user
router.put('/:id', updateUser)

// delete user
router.delete('/:id', deleteUser)

export default router;