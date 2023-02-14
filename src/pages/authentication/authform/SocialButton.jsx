import React, { Children } from 'react'

import './SocialButton.css';

const SocialButton = ({Logoimg,children,onClick}) => {
  return (
    <button onClick={onClick} className="social-btn md:w-[30%]">
      <div className='flex justify-center items-center'>
        {Logoimg}
        <div className='hidden md:block'>
          {children}
        </div>
      </div>
        
    </button>
  )
}

export default SocialButton