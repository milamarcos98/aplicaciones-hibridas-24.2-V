import React from 'react'
import { useFormContext } from 'react-hook-form'

const Input = () => {
    const {register, formState: {errors}} = useFormContext()
  return (
    <div>
        <input {
            ...register("age",  {
                required: "is required"
            })
        } />
    </div>
  )
}

export default Input