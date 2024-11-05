import React, { useState } from 'react'
import FormInput from './FormInput'

const Form2 = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    })

    const inputs = [
        {
            name: "username",
            placeholder: "username",
            label: "username",
            type: "text",
            errorMessage: "should be btw 4-20 ch...",
            required: true,
            pattern: "^[A-Za-z0-9]{4,20}$"
        },
        {
            name: "email",
            placeholder: "email",
            label: "email",
            type: "email",
            errorMessage: "should be email format.",
            required: true,
            pattern: "[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+"
        },
        {
            name: "birthday",
            placeholder: "birthday",
            label: "birthday",
            type: "date"
        },
        {
            name: "password",
            placeholder: "password",
            label: "password",
            type: "password",
            errorMessage: "should be btw 4-20 ch...",
            required: true,
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
        },
        {
            name: "confirmPassword",
            placeholder: "confirmPassword",
            label: "confirmPassword",
            type: "password",
            errorMessage: "passowrd should math",
            required: true,
            pattern: values.password
        }
        
    ]

    const handleOnChange = (e) => {
        setValues({...values,  [e.target.name]: e.target.value})
    }

  return (
    <form>
        {
            inputs.map((input) => (
                <FormInput
                key={input.name}
                value={values[input.name]}
                handleOnChange={handleOnChange}
                {...input}
                />
            ))
        }
    </form>
  )
}

export default Form2