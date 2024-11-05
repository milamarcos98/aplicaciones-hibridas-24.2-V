import React, { useState } from 'react'

const FormInput = (props) => {

    const [focused, setFocused] = useState(false)
    const {label, errorMessage, handleOnChange, ...otrasProps} = props;

  return (
    <div className='formInput'>
        <label>{label}</label>
        <input 
        onChange={handleOnChange}
        onFocus={(e) => setFocused(true)}
        focused={focused.toString()}
        {...otrasProps}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput