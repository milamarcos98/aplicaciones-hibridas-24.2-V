// fs filesystem

// COMMON JS
// const fs = require("fs")
// const fs = require("fs").promises
// fs.readFile
// const {readFile} = require("fs").promises

// ESM 
// import fs from "fs"
// import {promises as fs} from "fs"
// import {readFile} from "fs"
// import {readFile} from "fs/promises"


// lectura de archivos
// const {readFile} = require("fs").promises

// async function fsmodule(path){
//     try{
//         const data = await readFile(path, 'utf-8');
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsmodule("./file.txt")

// lectura del contenido de un directorio
// const {readdir} = require("fs").promises

// async function fsmodule(path){
//     try{
//         const data = await readdir(path);
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsmodule("../")

// stats - informacion de un archivo/carpeta
// const {stat} = require("fs").promises

// async function fsmodule(path){
//     try{
//         const data = await stat(path);
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsmodule("./")

// fs.exists
// access

// existe o no / permisos
const {access, constants} = require("fs").promises

// R_OK permisos de lectura
// W_OK permisos de escritura
// X_OK permisos de ejecuccion

async function fsmodule(path){
    try{
        const data = await access(path, constants.R_OK | constants.W_OK );
        console.log("tiene permisos")
    }catch(error){
        console.log("no tiene permisos")
    }
}

fsmodule("./file.txt")