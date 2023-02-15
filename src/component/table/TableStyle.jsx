import React from 'react';

import './TableStyle.css'; 

const TableStyle = ({children}) => {
  return (
      <div className='rounded-md overflow-x-auto border border-gray-200 border-b-0'>
        <table className='tableStyle overflow-scroll'>
            {children}
        </table>
      </div>
      
  )
}

export default TableStyle;