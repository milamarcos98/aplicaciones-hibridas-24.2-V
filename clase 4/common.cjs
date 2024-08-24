function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

module.exports = {
    sumar,
    restar
}

async function main(){
    const saludar = (await import('./esm.mjs')).default;
    // const {saludar} = await import('./esm.mjs');
    console.log(saludar("Alumnos"))
}
main()