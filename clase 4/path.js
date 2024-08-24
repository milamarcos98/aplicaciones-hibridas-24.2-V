import path from "path";

console.log(path.join('/user','local','///bin'))
console.log(path.resolve('archivos/archivo.txt'))
console.log(path.extname('clase/archivo.txt'))
console.log(path.basename('clase/archivo.txt'))
console.log(path.basename('clase/archivo.txt', path.extname('clase/archivo.txt')))
console.log(path.dirname('ruta/completa/al/archivo.txt'))
console.log(path.normalize('user//local/../bin'))
console.log(path.parse('ruta/completa/al/archivo.txt'))
console.log(path.format({
    dir: 'ruta/completa/al',
    base: 'archivo.txt'
}))

console.log(path.sep)


// \

// /
