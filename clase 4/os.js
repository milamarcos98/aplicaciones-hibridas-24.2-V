import os from "os"
// const os = require("os")

console.log("arquitectura del CPU: ", os.arch())
console.log("plataforma: ", os.platform())
console.log("memoria libre: ", os.freemem())
console.log("memoria total: ", os.totalmem())
console.log("cpus: ", os.cpus())
console.log("tiempo de actividad del sistema: ", os.uptime())
console.log("host: ", os.hostname())
console.log("directorio principal del usuario: ", os.homedir())
console.log("informacion de la red: ", os.networkInterfaces())