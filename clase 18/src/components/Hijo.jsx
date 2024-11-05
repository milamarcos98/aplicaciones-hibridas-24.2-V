import React from 'react'

const Hijo = ({title,subtitle, data, children, setValue}) => {
    console.log(children)
  return (
    <div>
        <h3>{title} </h3>
        <h2>{subtitle} </h2>
        <button onClick={() => setValue("value from child")}>set value</button>
        {
            data.map((item) => (
                <li>{item} </li>
            ))
        }
        <div>
            {children}
        </div>
    </div>
  )
}

export default Hijo