// BLOQUEANTES

// NO BLOQUEANTES

// CODIGO SINCRONO

// function fetchData(){
//     for(let i=0; i<100000000000; i++){}
//     return "datos obtenidos"
// }

// console.log("inicio")
// const data = fetchData()
// console.log(data)
// console.log("fin")


// CODIGO ASINCRONO

// function fetchData(){
//     setTimeout(function(){
//         // for(let i=0; i<100000000000; i++){}
//         return "datos obtenidos"
//     },1000)
// }

// console.log("inicio")
// const data = fetchData()
// console.log(data)
// console.log("fin")


// CALLBACKS
// funcion como argumento de funcion

// function fetchData(callback){
//     setTimeout(function(){
//         const data = "datos obtenidos";
//         callback(data)
//     }, 1000)
// }

// function processData(data){
//     console.log("data:" + data)
// }

// function modifyData(data){
//     console.log("data:" + data.toUpperCase())
// }


// fetchData(processData)
// fetchData(modifyData)


// CALLBACK HELL

// function fetchData(callback){
//     callback("informacion que le paso al callback")
// }

// function processData(data,callback){
//     callback(data.toUpperCase())
// }

// function saveData(data,callback){
//     console.log("data", data)
//     callback()
// }

// fetchData((data)=>{
//     processData(data, (processedData)=>{ //1er callback
//         saveData(processedData, ()=>{
//             console.log("proceso finalizado")
//         })
//     })
// })

// PROMESAS

// PENDING
// FULFILLED
// REJECTED

// const promesa = new Promise((resolve, reject) => {
//     // console.log("promesa pendiente")
//     const exito = true;
//     if(exito){
//         resolve("promesa exitosa");
//     }else{
//         reject("promesa rechazada")
//     }
// })

// promesa
//     .then(resultado => {
//         console.log(resultado)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("termino la promesa")
//     })


// ENCADENAMIENTO

// const primeraPromesa = new Promise((resolve, reject) => {
//     resolve("primer resultado")
// })

// primeraPromesa
//     .then(resultado => {
//         console.log(resultado)
//         return resultado.toUpperCase()
//     })
//     .then(resultado2 => {
//         console.log(resultado2)
//         return "resultado:", resultado2;
//     })
//     .then(resultado3 => {
//         console.log(resultado3)
//     })
//     .catch()


// function moneda(eleccion){
//     return new Promise((resolve, reject) => {
//         const resultado = Math.random() < 0.5 ? "cara" : "cruz";
//         // const eleccion = "cruz"
//         if(resultado === eleccion){
//             resolve("gane")
//         }else{
//             reject("perdi")
//         }
//     })
// }

// moneda("cruz")
//     .then(mensaje => {
//         console.log(mensaje)
//     })
//     .catch(error => {
//         console.log(error)
//     })


// ASYNC AWAIT

// obetenerDatos()
// .then(datos => {
//     console.log(datos)
// })
// .catch(error => {
//     console.log(error)
// })


// async function datos(){
//     try{
//         const datos = await obetenerDatos();
//         console.log(datos)
//     }catch(error){
//         console.log(error)
//     }
// }



// function obtenerDatosAPI(){
//     return new Promise((resolve, reject) => {
//         const exito = true;
//         if(exito){
//             resolve("data de la api")
//         }else{
//             reject("error al obtener la data")
//         }
//     })
// }

// async function mostrarData(){
//     try{
//         const datos = await obtenerDatosAPI();
//         console.log(datos)
//     }catch(error){
//         console.log(error)
//     }
// }

// mostrarData()


// Promise.all

// const primeraPromesa = new Promise((resolve, reject) => {
//     resolve("primer resultado")
// })

const promesa1 = Promise.resolve(2);
const promesa2 = Promise.resolve("hola");
// const promesa2 = Promise.reject("promesa2 : error 2");
const promesa3 = Promise.resolve(100);


Promise.all([promesa1, promesa2, promesa3])
.then(datos => {
    console.log(datos) // [2, "hola", 100]
})
.catch(error => {
    console.log(error)
})

// Promise.allSettled

// 5 / 1  / 100
// Promise.all([promesa1, promesa2, promesa3])
// .then(datos => {
//     console.log(datos) // [2, "hola", 100]
// })
// .catch(error => {
//     console.log(error)
// })
