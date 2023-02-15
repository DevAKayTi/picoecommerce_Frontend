import React from 'react';

import { Audio } from 'react-loader-spinner'

const Loader = () => {
    return (
            <Audio
                height="24"
                radius="9"
                color='#eee'
                ariaLabel='three-dots-loading'
                wrapperClass="wrapper-class"
            />
    )
}

export default Loader