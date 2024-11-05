import React, { useRef, useState } from 'react'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

const Form = () => {

    const schema = yup.object().shape({
        nombre: yup.string().required("name is required"),
        email: yup.string().email().required(),
        age: yup.number().positive().min(3).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "passwords son distintos").required()
    })


    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isCheckingEmail, setIsCheckingEmail] = useState(false)

    const checkEmailTaken = async (email) => {
        const takenEmails = ["test@gmail.com", "user@gmail.com"];
        return new Promise((resolve) => setTimeout(()=> {
            resolve(takenEmails.includes(email))
        }), 2000)
    }

    const {register, handleSubmit, reset, watch, formState: {errors}} = useForm({
        defaultValues: {
            nombre: "",
            correo: "",
            fechaNacimiento: "",
            password: "",
            confirmPassword: "",
            pais: "ar",
            aceptarTerminos: false
        },
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const password = watch("password");
    console.log(password)

    // const password = useRef(null)
    // password.current = watch("password");

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        reset()
    })
  return (
    <form onSubmit={onSubmit}>
        <div>
            <label>Nombre</label>
            <input type="text" name="nombre"
            {
                ...register("nombre", {
                    required: {
                        value: true,
                        message: "Nombre es required"
                    },
                    minLength: {
                        value: 3,
                        message: "Min 3 characters"
                    },
                    maxLength: 20
                })
            }
            />
            {errors.nombre && <span>{errors.nombre?.message}</span>}
            {/* {errors.nombre?.type === "maxLength" && <span>Nombre debe ser menor a 20 ch</span>} */}
        </div>
        <div>
            <label>Correo electronico</label>
            <input type="email" name="correo" 
            {
                ...register("correo", {
                    required: {
                        value: true,
                        message: "Correo es required"
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Correo no valido"
                    },
                    validate: {
                        emailTaken: async (value) => {
                            setIsCheckingEmail(true)
                            const isTaken = await checkEmailTaken(value);
                            setIsCheckingEmail(false)
                            !isTaken && setIsEmailValid(true)
                            return !isTaken || "email in use!"
                        }
                    }
                })
            }
            />
            {isCheckingEmail && <p>checking email...</p>}
            {/* {isEmailValid && <p>Email valid</p>} */}
            {errors.correo && <span>{errors.correo?.message}</span>}
        </div>
        <div>
            {/* TABLA DE VERDADES */}

            {/* AND 

            true true = true 
            false true = false
            true false = false
            false false = false

            OR

            true true = true 
            false true = true
            true false = true
            false false = false */}
            <label>Fecha de nacimiento</label>
            <input type="date" name="fechaNacimiento" 
             {
                ...register("fechaNacimiento", {
                    required: {
                        value: true,
                        message: "Fecha es required"
                    },
                    //validar si es mayor 18
                    validate: (value) => {
                        const fechaNacimiento = new Date(value);
                        const fechaActual = new Date();
                        const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                        return edad >= 18 || "debes ser mayor de edad"
                    }
                })
            }
            />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" 
            {
                ...register("password", {
                    required: {
                        value: true,
                        message: "Password es required"
                    },
                    minLength: {
                        value: 6,
                        message: "Min 6 characters"
                    },
                    maxLength: 20
                })
            }
            />
        </div>
        <div>
            <label>Confirm password</label>
            <input type="password" name="confirmPassword" {
                ...register("confirmPassword", {
                    required: {
                        value: true,
                        message: "Password es required"
                    },
                    validate: (value) => {
                        value === password || "las contraseñas no coinciden"
                        // if(value === password){
                        //     return true
                        // }else{
                        //     return "las contraseñas no coinciden"
                        // }
                    }
                })
            }
            />
        </div>
        <div>
            <label>Pais:</label>
            <select name="pais" {...register("pais")}>
                <option value="mx">Mexico</option>
                <option value="co">Colombia</option>
                <option value="ar">Argentina</option>
            </select>
            {
                watch("pais") === "ar" && (
                    <input type='text' placeholder='provincia' {...register("provincia")}/>
                )
            }
        </div>
        <div>
            <input type="checkbox" name="aceptarTerminos" {
                ...register("aceptarTerminos", {
                    required: {
                        value: true,
                        message: "Es necesario aceptar los terminos y condiciones"
                    }
                })
            }/>
            <label>Acepto terminos y condiciones</label>
        </div>
        <button type='submit'>Enviar</button>
        <pre>
            {
                JSON.stringify(watch())
            }
        </pre>
    </form>
  )
}

export default Form