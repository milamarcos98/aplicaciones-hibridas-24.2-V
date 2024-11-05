
import { useState } from 'react';
import './App.css'
import Lista from './components/Lista'
import Counter from './components/Counter';
import Ejemplo from './components/Ejemplo';
import Ejemplo2 from './components/Ejemplo2';
import Padre from './components/Padre';

function App() {

  const items = ["item1", "item2", "item3"];

  const [selectedItem, setSelectedItem] = useState("-");

  return (
    <>
    <Padre/>
    {/* <Ejemplo2/> */}
    {/* <h2>Item seleccionado: {selectedItem}</h2>
    <Lista items={items} setSelectedItem={setSelectedItem} /> */}
    </>
  )
}

export default App
