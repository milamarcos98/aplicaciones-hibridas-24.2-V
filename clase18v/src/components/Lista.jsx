import React, {useState} from 'react'

const Lista = ({items, setSelectedItem}) => {

    // let selectedItem = "";
    // manejo de estado
    

  return (
    <div>
       
        {
            items.map((item, index) => (
                <li key={index} onClick={() => setSelectedItem(item)}>{item}</li>
            ))
        }
    </div>
  )
}

export default Lista