import React from 'react';

import AuthBackgroundImage from './authbackgroundimage.webp';
import './AuthBackground.css';


const AuthBackground = () => {
    return (
        <div className='w-full h-full image-positions'>
            <img src={AuthBackgroundImage} alt="auth-background-image" />
        </div>
    )
}

export default AuthBackground