import React from 'react';

import './TableStyle.css'; 

const TableStyle = ({children}) => {
  return (
      <div className='rounded-md overflow-hidden border border-gray-200 border-b-0'>
        <table className='table-fix tableStyle'>
            {children}
        </table>
      </div>
      
  )
}

export default TableStyle;