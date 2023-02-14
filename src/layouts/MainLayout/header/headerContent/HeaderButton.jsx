import React, { forwardRef } from 'react'

const HeaderButton = forwardRef(({children,onToggleHandler,data},ref) => {

  return (
    <button
        ref={ref}
        className='relative w-9 h-9 ml-3 text-xl flex justify-center items-center rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-300'
        onClick={onToggleHandler}
        data-dropdown-toggle={data}
    >
        {children}
        
    </button>
  )
})

export default HeaderButton