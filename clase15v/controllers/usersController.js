import { readUsersFile, writeUsersFile } from "../model/usersModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const secretKey = process.env.SECRET;

const getAllUsers = (req, res) => {
    let users = readUsersFile();
    res.status(200).json(users);
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const user = users.find(u => u.id === userId);

    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message: "usuario no encontrado"})
    }
}

const createUser = async (req, res) => {
const {name, lastname, username, password, email} = req.body;

const hashedPassword = await bcrypt.hash(password, 10) //saltRounds

console.log(password)
console.log(hashedPassword)
// clave
// $2b$10$u8eo1yJsateWe2.3Hy3FQ.QzztOjMRH7oAxJg/JRTWn2Q5F22lzum
    let users = readUsersFile();
    const newUser = {
        id: users.length > 0 ? users.length + 1 : 1,
        name, //name: valor de name
        email,
        lastname,
        username,
        password: hashedPassword
    }
    users.push(newUser);
    writeUsersFile(users)
    res.status(201).json(newUser)
}

const loginUser = async (req, res) => {
   const {email, password} = req.body;

   let users = readUsersFile();

   const user = users.find(u => u.email === email);
    console.log(user)
   if(!user){
    return res.status(404).json({message: "usuario no encontrado"})
   }

   const validPassword = await bcrypt.compare(password, user.password); //true/false
    console.log(validPassword)
   if(!validPassword){
    return res.status(401).json({message: "contraseña incorrecta"})
   }

   const token = jwt.sign({id: user.id, email: user.email}, secretKey, {expiresIn: '1h'});

   res.status(200).json({token})
}

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const userIndex = users.findIndex(u => u.id === userId);

    if(userIndex !== -1){
        users[userIndex] = {id: userId, ...req.body};
        writeUsersFile(users)
        res.status(200).json(users[userIndex])
    }else{
        res.status(404).json({message: "usuario no encontrado"})
    }
}

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const userIndex = users.findIndex(u => u.id === userId);

    if(userIndex !== -1){
       users.splice(userIndex, 1)
        res.status(204).send() //204 No Content
    }else{
        res.status(404).json({message: "usuario no encontrado"})
    }
}

export {getAllUsers, getUserById, createUser,loginUser, updateUser, deleteUser};