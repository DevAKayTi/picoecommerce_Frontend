import React from 'react'

import { Link } from 'react-router-dom';

import Button from '../../component/button/Button';

import Error from '../../assets/images/auth/404.png';

import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='w-screen h-screen bg-gray-200 relative'>
    <div className='error-container bg-white py-20 px-48 text-center rounded-md shadow-lg'>
      <h1 className='font-bold text-[40px] text-gray-900 mb-4'>Oops!</h1>
      <div className='fw-semibold fs-6 text-gray-400 mb-7'>We can't find that page.</div>
      <div className='mb-3'>
        <img
          src={Error}
          className='w-56'
          alt='error'
        />
      </div>
      <div className='mb-0 flex justify-center'>
        <Link to='/' className='btn btn-sm btn-primary'>
          <Button
          width={"w-[40]"}
            bgColor={"bg-blue-500"}
            hoverColor={"hover:bg-blue-800"}
          >
            Return Home
          </Button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default ErrorPage