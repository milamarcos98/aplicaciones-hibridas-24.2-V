import React, { useState } from 'react'

const Counter = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 5)
    }

    const decrementar = () => {
        if(contador > 0){
        setContador(contador - 5)
    }
    }

    const resetear = () => {
        setContador(0)
    }
  return (
    <div>
        <h3>Counter: {contador} </h3>
        <div>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
            <button onClick={resetear}>Reset</button>
        </div>
    </div>
  )
}

export default Counter