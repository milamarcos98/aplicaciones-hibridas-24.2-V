import { useRef, useState } from 'react'
import './App.css'
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';

function App() {

  // no controlados
  // useRef

  // controlado
  // usestate

  const [inputValue, setInputValue] = useState("");

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  // const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value)
    console.log(inputValue)
  }

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="text" value={inputValue} onChange={handleInputChange} />
    //   <p>{inputValue}</p>
    //   {/* <input type="text" ref={inputRef}/>
    //   <p>{inputRef.current.value}</p> */}
    //   <button type='submit'>Enviar</button>
    // </form>
    <Form3/>
  )
}

export default App
