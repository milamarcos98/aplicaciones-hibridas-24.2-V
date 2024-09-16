import express from "express"
import fs from "fs"

const app = express();
const port = 3000;

app.use(express.json());

// let users = [
//     {id: 1, name: "pepe", email: "pepe@pepe.com"},
//     {id: 2, name: "juan", email: "juan@pepe.com"}
// ]

// /users

const readUsersFile = () => {
    const data = fs.readFileSync('users.json', 'utf8');
    return JSON.parse(data);
}

const writeUsersFile = (data) => {
    fs.writeFileSync('users.json', JSON.stringify(data), 'utf8')
}

// get all users
app.get('/users', (req, res) => {
    let users = readUsersFile();
    res.status(200).json(users);
})

// get by id
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const user = users.find(u => u.id === userId);

    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message: "usuario no encontrado"})
    }
})

// create user
app.post('/users', (req, res) => {
    let users = readUsersFile();
    const newUser = {
        id: users.length > 0 ? users.length + 1 : 1,
        name: req.body.name,
        email: req.body.email
    }
    users.push(newUser);
    writeUsersFile(users)
    res.status(201).json(newUser)
})

// update user
app.put('/users/:id', (req, res) => {
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
})

// delete user
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsersFile();
    const userIndex = users.findIndex(u => u.id === userId);

    if(userIndex !== -1){
       users.splice(userIndex, 1)
        res.status(204).send() //204 No Content
    }else{
        res.status(404).json({message: "usuario no encontrado"})
    }
})

app.listen(port, () => console.log(`http://localhost:${port}`))