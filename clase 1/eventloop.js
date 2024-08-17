function sumar(a,b){
    return a+b;
}

function multi(a,b){
    return a*b;
}

function mostrar(){
    const numero1 = 5;
    const numero2 = 10;

    const suma = sumar(numero1, numero2);
    console.log(`la suma es: ${suma}`)

    const producto = multi(numero1, numero2);
    console.log(`el producto es: ${producto}`)

}

mostrar()





console.log("inicio")
console.log("uno")

function dos(){
    setTimeout(function(){
        console.log("dos")
    }, 1000)
}

function uno(){
    setTimeout(function(){
        console.log("tres")
    }, 0)
    dos()
    console.log("cuatro")
}

uno();

console.log("fin")



function functionA(){
    setTimeout(function(){
        console.log("ejecutando A")
            funcionB()
            console.log("finalizando A")
    },0)
}

function funcionB(){
    console.log("ejecutando B")
    funcionC()
    console.log("finalizando B")
}

function funcionC(){
    console.log("ejecutando C")
}

console.log("inicio")
functionA()
console.log("fin")



console.log("inicio")

setTimeout(function(){
    console.log("tarea en task queue")
})

Promise.resolve().then(function(){
    console.log("primera tarea")
}).then(function(){
    console.log("segunda tarea")
})

console.log("fin")

// https://www.jsv9000.app/