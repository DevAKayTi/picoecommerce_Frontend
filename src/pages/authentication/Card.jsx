import React from 'react'

const Card = ({children}) => {
  return (
    <div className='w-[460px] max-w-[500px] p-6 bg-day rounded-lg '>
        {children}
    </div>
  )
}

export default Card 