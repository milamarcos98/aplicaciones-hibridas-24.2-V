import express from "express"
import usersRoutes from "./routes/usersRoutes.js";
import cursosRoutes from "./routes/cursosRoutes.js";
import path from "path"
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import dotenv from "dotenv"
// import dotenv from "dotenv/config"
dotenv.config()

// MVC
// modelo
// vista
// controlador

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("conexion exitosa con mongodb!"))
.catch((err) => console.error("error al conectar con mongodb!", err))

const __filename = fileURLToPath(import.meta.url);

app.use(express.json());
app.use(express.static(path.join(path.dirname(__filename), 'public')))

// pug ejs handlebars


app.get("/", (req, res) => {
    // res.sendFile(path.join(path.dirname(__filename), 'public', 'index.html'));
})

app.get("/api", (req, res) => {
    res.sendFile(path.join(path.dirname(__filename), 'public', 'about.html'));
})

app.use('/usuarios', usersRoutes)
app.use('/cursos', cursosRoutes)

app.listen(port, () => console.log(`http://localhost:${port}`))