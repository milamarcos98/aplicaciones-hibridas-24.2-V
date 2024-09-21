import express from "express"
import usersRoutes from "./routes/usersRoutes.js";
import path from "path"
import { fileURLToPath } from "url";


// MVC
// modelo
// vista
// controlador

const app = express();
const port = 3000;

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
// app.use('/posteos', posteosRoutes)

app.listen(port, () => console.log(`http://localhost:${port}`))