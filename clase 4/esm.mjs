import {sumar} from "./common.cjs"
import os from "os"

console.log(sumar(2,4))

export default function saludar(nombre){
    return `Hola ${nombre}`
}

console.log("vos estas en: ", os.platform())