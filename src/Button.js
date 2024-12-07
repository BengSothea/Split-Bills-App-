import React from 'react';
import ReactDOM from 'react-dom/client';

const Button = ({children,onClick,setIsSelectHandle}) => {
  return (
  <button className='button' onClick={onClick}>
   {children}
  </button>
  );
};

export default Button;