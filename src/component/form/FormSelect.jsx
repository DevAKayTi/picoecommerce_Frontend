import React from 'react';

import './FormSelect.css';

const FormSelect = ({children}) => {
  return (
    <div className='form-selects mt-2 w-full'>
        {children}
    </div>
  )
}

export default FormSelect