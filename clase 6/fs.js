const fs = require('fs').promises;

// writeFile

// sobreescribir un archivo o crear uno nuevo
// async function testFs(path, data){
//     try{
//         await fs.writeFile(path, data, 'utf-8');
//         console.log("archivo escrito correctamente!")
//     }catch(error){
//         console.log("error: ", error)
//     }
// }

// testFs('./file.txt', 'Este es otro un mensaje desde js.')

// sumar contenido a un archivo
// async function testFs(path, data){
//     try{
//         await appendFile(path, data, 'utf-8');
//         console.log("archivo escrito correctamente!")
//     }catch(error){
//         console.log("error: ", error)
//     }
// }

// testFs('./file.txt', '\n\nEste es ooootro un mensaje desde js.')

// creamos carpetas / directorios
// async function testFs(path){
//     try{
//         await fs.mkdir(path, {recursive: true});
//         console.log("archivo escrito correctamente!")
//     }catch(error){
//         console.log("error: ", error)
//     }
// }

// testFs('./nueva/img')

// eliminar una carpeta / directorio
// async function testFs(path){
//     try{
//         await fs.rmdir(path);
//         console.log("archivo escrito correctamente!")
//     }catch(error){
//         console.log("error: ", error)
//     }
// }

// testFs('./sub')


// eliminar archivos
// async function testFs(path){
//     try{
//         await fs.unlink(path);
//         console.log("archivo escrito correctamente!")
//     }catch(error){
//         console.log("error: ", error)
//     }
// }

// testFs('./file.txt')


// ctrl k ctrl c -- comentar
// ctrl k ctrl u -- descomentar
// alt shift a - comentario en bloque
