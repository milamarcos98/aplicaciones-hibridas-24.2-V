import React, { useState } from 'react'

const Ejemplo = () => {
    const [votos, setVotos] = useState({
        opcion1: 0,
        opcion2: 0,
        opcion3: 0,
    })

    const totalVotos = votos.opcion1 + votos.opcion2 + votos.opcion3;

    const votar = (opcion) => {
        setVotos({
            ...votos,
            [opcion]: votos[opcion] + 1
        })
    }

    // [opcion]: votos[opcion] + 1
    // opcion2 : votos[opcion2] + 1

    // const [opcion1, setOpcion1] = useState(0);
    // const [opcion2, setOpcion2] = useState(0);
    // const [opcion3, setOpcion3] = useState(0);
  return (
    <div>
        <h3>Simulacion de Encuesta</h3>
        <div>
            <button onClick={() => votar('opcion1')}>Opcion 1</button>
            <button onClick={() => votar('opcion2')}>Opcion 2</button>
            <button onClick={() => votar('opcion3')}>Opcion 3</button>
        </div>
        <h4>Resultados:</h4>
        <p>Opcion 1: {votos.opcion1} - {(votos.opcion1 / totalVotos * 100).toFixed(2)}% </p>
        <p>Opcion 2: {votos.opcion2} - {(votos.opcion2 / totalVotos * 100).toFixed(2)}%</p>
        <p>Opcion 3: {votos.opcion3} - {(votos.opcion3 / totalVotos * 100).toFixed(2)}%</p>
        <p>Total de votos: {totalVotos} </p>
    </div>
  )
}

export default Ejemplo