import React, { useState } from 'react'
import Hijo from './Hijo'

// mongodump -d example -out  "C:\Users\Alumno\Desktop\clase"
// mongodump -d example -o  "C:\Users\Alumno\Desktop\clase"

const Padre = () => {
    const [value, setValue] = useState("");

  return (
    <div>
        {value}
        <Hijo title="titulo" data={["item1", "item2"]} setValue={setValue}  >
        <div>
            <h4>titulo 4</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, accusantium? Nesciunt ea aperiam debitis repellendus quaerat cum fuga temporibus unde excepturi rem ipsum dicta natus eos harum possimus, odit eum.</p>
        </div>
        </Hijo>
{/*
        <Hijo title="titulo" data={["item1", "item2"]}>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, accusantium? Nesciunt ea aperiam debitis repellendus quaerat cum fuga temporibus unde excepturi rem ipsum dicta natus eos harum possimus, odit eum.</p>

        </Hijo> */}
    </div>
  )
}

export default Padre