import React from 'react';

import './FormInput.css';

const FormInput = ({type,id,name,value,placeholder,onChange,onBlur,error,width,htmlFor,label,errorMessage}) => {
  return (
    <>
      <label htmlFor={htmlFor} className='text-medium font-semibold text-gray-600'>{label}</label>
    
      <div className={`form-inputs mt-2 ${error && 'error'}`}>
        <input 
          className={`${width ? width : 'w-full'}`}
          type={type} 
          id={id} 
          name={name} 
          value={value} 
          placeholder={placeholder} 
          onChange={onChange} 
          onBlur={onBlur} />
      </div>

      {error && errorMessage && (
        <div className='error-message'>{errorMessage}</div>
      )}
    </>
  )
}

export default FormInput;
