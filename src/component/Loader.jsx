import React from 'react';

import { Audio } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <Audio
                height="80"
                width="80"
                radius="9"
                color='#181823'
                ariaLabel='three-dots-loading'
                wrapperClass="wrapper-class"
            />
        </div>

    )
}

export default Loader