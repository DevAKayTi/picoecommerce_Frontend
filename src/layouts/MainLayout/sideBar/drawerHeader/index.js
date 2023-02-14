import React from 'react'

import Logo from '../../../../assets/images/icons/logo.png';

const DrawerHeader = () => {
    return (
        <div className='w-40 pl-6 py-2 bg-white'>
            <img src={Logo} alt="logo" />
        </div>
    )
}

export default DrawerHeader