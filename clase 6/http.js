const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    // switch(req.method){
    //     case "GET": {
    //         if(url === "/"){
    //             // ...
    //         }else if(url === "/data"){
    //             ...
    //         }
    //     }
    // }

    if(url === "/" && method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hello World!")
    }else if(url === "/json" && method === 'GET'){
        const data = {
            message: "Hola mundo!",
            date: new Date()
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data))
    }else if(url === "/html" && method === 'GET'){
        const data = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus rem quas earum deserunt omnis itaque reiciendis qui laborum magni voluptates similique voluptatem vel dolore architecto sunt quos, aliquid dolorem quaerat.</p>
        </body>
        </html>
        `;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data)
    }else if(url === "/redirect" && method === 'GET'){
        res.writeHead(302, {'Location': '/'});
        res.end()
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Not found")
    }
})

// https://httpstatusdogs.com/
server.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
})