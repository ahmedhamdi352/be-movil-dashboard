import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function InputFile (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
      {console.log("imag")}
      <Field name={name}>
      {({ field, form }) => (
        
        <>
          <input type="file" id={name} {...rest} {...field} />
          <ErrorMessage component={TextError} name={name} />
          </>
          
      )}
    </Field>
      
    </div>
  )
}

export default InputFile

