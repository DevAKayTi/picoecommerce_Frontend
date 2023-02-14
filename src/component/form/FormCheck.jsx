import React from 'react'

import './FormCheck.css'

const FormCheck = ({type,id,checked,name,onChange,label}) => {
  return (
    <div className='formcheck cursor-pointer flex items-center'>
        <input
            id={id} 
            checked={checked}
            type={type} 
            name={name}
            onChange={onChange}
            className="w-4 h-4 border-gray-300 drop-shadow-lg mr-3 cursor-pointer"
        />
        <label htmlFor={id} className="text-sm cursor-pointer">{label}</label>
    </div>
  )
}

export default FormCheck