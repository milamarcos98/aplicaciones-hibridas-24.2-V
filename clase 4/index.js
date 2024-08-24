// function sumar(a,b){
//     return a + b;
// }

// function restar(a,b){
//     return a - b;
// }

// common.js

// module.exports = sumar;

// module.exports = {
//     sumar,
//     restar
// }

// exports.sumar = function(a,b){
//     return a + b;
// }


// ----------------

// ES MODULES

export function sumar(a,b){
    return a + b;
}

export function restar(a,b){
    return a - b;
}

// export {sumar, restar};

// exportaciones nombradas

// exportaciones por defecto

export default function saludar(nombre){
    return `Hola ${nombre}`
}

// export default {restar, sumar};

