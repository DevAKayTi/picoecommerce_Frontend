import React from 'react';

const Popper = ({children}) => {
  return (
    <div className='absolute top-[110%] right-0 bg-white border-1 border-gray-100 rounded-md shadow-xl z-30 overflow-hidden'>
        {children}
    </div>
  )
}

export default Popper