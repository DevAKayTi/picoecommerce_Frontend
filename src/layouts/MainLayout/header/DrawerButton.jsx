import React from 'react';

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';

const drawerButton = ({open,onDrawerHandler}) => {
  return (
    <button 
      className='w-9 h-9 ml-2 bg-gray-100 rounded-sm flex justify-center items-center text-xl'
      onClick={onDrawerHandler}
    >
        {!open ? <AiOutlineMenuUnfold  /> : <AiOutlineMenuFold />}
    </button>
  )
}

export default drawerButton