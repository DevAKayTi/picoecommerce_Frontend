import React from 'react';


//component
import Card from './Card';

// asserts
import AuthBackground from '../../assets/images/auth/AuthBackground';
import Logo from '../../assets/images/icons/logo.png';

const AuthWrapper = ({children}) => {
  return (
    <div className='w-full h-full min-h-screen overflow-x-hidden relative'>

        <AuthBackground/>

        <div className='backdrop-blur-sm bg-transparent'>
            
            <div className='w-52 pl-7'>
                <img src={Logo} alt="logo" />
            </div>
                
            <div className='flex justify-center items-center w-full min-h-[calc(100vh-95px)] h-full'>
                <Card>{children}</Card>
            </div>
            
        </div>
    </div>
  )
}

export default AuthWrapper