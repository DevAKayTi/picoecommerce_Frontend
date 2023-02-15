import React from 'react';

import './Button.css';

const Button = ({type,bgColor,children,width,disable,hoverColor}) => {
  return (
    <button type={type} disabled={disable} className={`buttons ${bgColor} ${hoverColor} ${width ? width : 'w-full'} ${disable && 'cursor-not-allowed'}`}>{children}</button>
  )
}

export default Button