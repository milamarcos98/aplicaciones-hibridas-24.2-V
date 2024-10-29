import React, { Fragment, useState } from 'react'

const Ejemplo2 = () => {
    const numeroSecreto = 7;

    const [juegoTerminado, setJuegoTerminado] = useState(false);

    const [numeroIngresado, setNumeroIngresado] = useState('');

    const [mensaje, setMensaje] = useState('');

    const manejarCambio = (event) => {
        setNumeroIngresado(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(numeroIngresado < numeroSecreto){
            setMensaje("el numero es mas alto")
        }else if(numeroIngresado > numeroSecreto){
            setMensaje("el numero es mas bajo")
        }else{
            setMensaje("YAY GANASTE!");
            setJuegoTerminado(true)
        }

        setNumeroIngresado('');
    }

    const reiniciarJuego = () => {
        // window.location.reload();
        setJuegoTerminado(false)
        setMensaje('')
    }

  return (
    <div>
        <h3>Adivina el numero</h3>
        {
            !juegoTerminado ? (
                <>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="number"
                    value={numeroIngresado}
                    onChange={manejarCambio}
                    placeholder='Ingresa un numero'
                    />
                    <button type='submit'>Adivinar</button>
                </form>
                {mensaje && <p>{mensaje}</p>}
                </>
            ) : (
                <>
                {mensaje && <p>{mensaje}</p>}
                <button onClick={reiniciarJuego}>Jugar de nuevo</button>
                </>
            )
        }
    </div>
  )
}

export default Ejemplo2