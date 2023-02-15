import React from 'react';

import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';

import './FormInput.css';

const FormInput = ({type,id,name,value,placeholder,onChange,onBlur,error,width,htmlFor,label,errorMessage,hidden,onHiddenHandler}) => {
  return (
    <>
      <label htmlFor={htmlFor} className='text-medium font-semibold text-gray-600'>{label}</label>
    
      <div className={`form-inputs mt-2 ${error && 'error'} relative`}>
        <input 
          className={`${width ? width : 'w-full'}`}
          type={type} 
          id={id} 
          name={name} 
          value={value} 
          placeholder={placeholder} 
          onChange={onChange} 
          onBlur={onBlur} />
      
        {
          onHiddenHandler && (
          <div 
          className='absolute top-0 right-0 h-10 w-12 flex justify-center items-center text-xl opacity-60 cursor-pointer'
          onClick={onHiddenHandler}
          >
            {
              hidden ? <AiOutlineEye/> : <AiOutlineEyeInvisible/> 
            }  
          </div>
          )
        }
      </div>

      {error && errorMessage && (
        <div className='error-message'>{errorMessage}</div>
      )}
    </>
  )
}

export default FormInput;
