import express from "express"

const app = express()

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// HTTP

// GET POST PUT DELETE

app.get("/", (req, res) => {
    res.send("hola")
})


app.get("/test", (req, res) => {
    res.send("test")
})

// app.get("/:color/:forma", (req, res) => {
//     let {color, forma} = req.params
//     res.send(`Tu color es: ${color} y la forma es: ${forma}`)
// })


// app.get("/filtrado/:color", (req, res) => {
//     let {color} = req.params
//     res.send(`Tu color es: ${color}`)
// })

// DM DW
const usuarios = [
    {id: 1, nombre: "Juan", apellido: "Perez", edad: 25, carrera: "DM"},
    {id: 2, nombre: "Carlos", apellido: "Perez", edad: 27, carrera: "DW"},
    {id: 3, nombre: "Maria", apellido: "Perez", edad: 29, carrera: "DM"},
    {id: 4, nombre: "Camila", apellido: "Perez", edad: 27, carrera: "DW"},
    {id: 5, nombre: "Pepe", apellido: "Perez", edad: 29, carrera: "DW"}
]

app.get("/users", (req, res) => {
    res.send({usuarios})
})

app.get("/queries", (req, res) => {
    let {nombre, apellido, edad} = req.query;
    if(!edad) return res.send(`El nombre es ${nombre} ${apellido}`)
    res.send(`El nombre es ${nombre} ${apellido} y tiene ${edad} años.`)
})

app.get("/users/filterbyid/:id", (req, res) => {
    let userId = req.params.id;
    let usuario = usuarios.find(user => user.id === parseInt(userId));
    if(!usuario) return res.send({error: `3312: usuario con id:${userId} no encontrado`});
    res.send(usuario)
})

app.get("/users/carreras", (req, res) => {
    let {carrera} = req.query;
    if(!carrera || (carrera !== "DM" && carrera != "DW")) return res.send({error: `3312: valor no valido`});
    let filtrado = usuarios.filter(user => user.carrera === carrera);
    res.send(filtrado)
})

let users = [];
app.post("/users", (req, res) => {
    let user = req.body;
    // nombre apellido
    if(!user.nombre || !user.apellido){
        return res.status(400).send({status: "error", error: "incompleto"})
    }
    console.log(users);
    console.log(user);
    let findUser = users.filter(u => u.nombre === user.nombre && u.apellido === user.apellido)
    if(users.length > 0 && findUser.length > 0){
        return res.status(400).send({status: "error", error: "already created!"})
    }else{
        users.push(user)
        return res.status(201).send({status: "success", error: "user created!", user: user})
    }
})




app.listen(3000, () => console.log("server running on port http://localhost:3000"))