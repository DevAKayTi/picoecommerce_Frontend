import React from 'react';

// component
import AuthLogin from './authform/AuthLogin';
import AuthWrapper from './AuthWarpper';

const Login = () => {
  return (
    <AuthWrapper>
        <h3 className='text-3xl font-semibold tracking-wide'>Login</h3>
        <div className='pt-6'>
          <AuthLogin/>
        </div>
    </AuthWrapper>
        
  )
}

export default Login