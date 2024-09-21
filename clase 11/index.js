import express from "express";
const app = express();

// middlewares
app.use(express.json())
app.use(verificarCuerpoVacio)

// next()

function middlewareEjemplo(req, res, next){
    console.log("middleware ejecutado")
    next()
}

// app.use(middlewareEjemplo) //global

const enMantenimiento = true;

function verificarMantenimiento(req, res, next){
    if(enMantenimiento){
        res.status(503).send("El servidor esta en mantenimiento, intentalo mas tarde.")
    }else{
        next()
    }
}

// app.use(verificarMantenimiento)

function accesoRestringidoPorHorario(req, res, next){
   const horaActual = new Date().getHours();
   console.log(horaActual);
   if(horaActual >= 8 && horaActual < 18){
        next();
   }else{
    res.status(403).send("Acceso no permitido fuera del horario laboral.")
   }
}

// app.use(accesoRestringidoPorHorario)

function delay(ms){
    return function(req, res, next){
        setTimeout(() => next(), ms)
    }
}

// app.use(delay(3000))

function verificarCuerpoVacio(req, res, next){
    console.log(req.body)
    console.log(Object.keys(req.body))
    if(req.method === "POST" || req.method === "PUT"){
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({mensaje: "El cuerpo de la peticion no puede estar vacio"})
        }
    }
    next();
}

// app.use(express.json())
// app.use(verificarCuerpoVacio)



// limitar a 10 solicitudes por minuto
const solicitedPorIP = {}


// IP
function limitarSolicitudes(req, res, next){
    const ip = req.ip;
    console.log(ip)
    const tiempoActual = Date.now();

    if(!solicitedPorIP[ip]){
        solicitedPorIP[ip] = [];
    }

    solicitedPorIP[ip] = solicitedPorIP[ip].filter(tiempo => tiempo > tiempoActual - 60000);

    if(solicitedPorIP[ip].length >= 10){
        return res.status(429).json({mensaje: "Too many requests. Wait one minute!"})
    }

    solicitedPorIP[ip].push(tiempoActual);
    next();
}

// app.use(limitarSolicitudes)



app.get("/test", (req, res) => {
    res.send("test")
})

app.get("/hola", (req, res) => {
    res.send("hola")
})

function verificarRol(rolesPermitidos){
    return function(req, res, next){
        const rolUsuario = req.headers['x-rol'];

        if(rolesPermitidos.includes(rolUsuario)){
            next();
        }else{
            res.status(403).json({mensaje: "Acceso denegado"})
        }
    }
}

// visitante
// admin super-admin
// app.get("/panel", verificarRol(["admin","super-admin"]), (req, res) => {
//     res.send("hola")
// })




app.get("/error",(req, res, next) => {
    const error = new Error("Algo salio mal");
    error.status = 500;
    next(error)
})

app.get("/error2",(req, res, next) => {
    const error = new Error("Algo salio mal 2");
    error.status = 500;
    next(error)
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).json({mensaje: err.message || "Error interno del servidor"})
})


app.listen(3000, () => console.log("http://localhost:3000") )