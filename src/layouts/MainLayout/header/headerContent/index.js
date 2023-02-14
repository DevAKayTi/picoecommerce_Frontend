import React from 'react';

import Search from './Search';
import Profile from './profile/Profile';
import Notification from './notification/Notification';

const HeaderContent = () => {

    return (
        <>
            <Search />
            <div className='ml-auto mr-6 flex items-center'>
                <Notification />
                <Profile />
            </div>
        </>
    )
}

export default HeaderContent