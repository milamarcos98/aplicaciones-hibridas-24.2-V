import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const errorMessage = loginValidation(email, password);
  return (
    <div>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} name='email' placeholder='email' />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} name='password' placeholder='password' />
        <p>{errorMessage}</p>
        <button disabled={errorMessage} type='submit'>Buscar</button>
    </div>
  )
}

const loginValidation = (email, password) => {
    if(!email.includes('@')) return "Email incorrecto!"
    if(password.length < 4) return "contraseña incorrecta!"
}

export default Form