import express from "express"
import usersRoutes from "routes/usersRoutes.js";

// MVC
// modelo
// vista
// controlador

const app = express();
const port = 3000;

app.use(express.json());

app.use('/usuarios', usersRoutes)
// app.use('/posteos', posteosRoutes)

app.listen(port, () => console.log(`http://localhost:${port}`))