const http = require("http")
const url = require("url")
const fs = require("fs")
const path = require("path")

// console.log(__dirname)
// console.log(__filename)

const logFile = path.join(__dirname, 'access.log');

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;

    const logMessage = `Ruta accedida: ${pathname}, Fecha y hora: ${new Date().toISOString()}\n`;

    fs.appendFile(logFile, logMessage, (error) => {
        if(error){
            console.log(error)
        }
    })

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end("Ruta registrada en el log")
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
})