import React from 'react'
import Input from './components/Input'
import { FormProvider, useForm } from 'react-hook-form'

const Form2 = () => {
    const methods = useForm({
        mode: "onChange"
    })
  return (
    <FormProvider {...methods}>
        <form>
            <label htmlFor="">nombre</label>
            <input type="text" {...methods.register("nombre")} />
            {methods.formState.errors.name && <span>{methods.formState.errors.name.message}</span>}
            <Input/>
        </form>
    </FormProvider>
  )
}

export default Form2