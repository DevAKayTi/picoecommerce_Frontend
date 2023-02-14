import React from 'react';

import './UserPopup.css';

const UserPopup = () => {
  return (
    <ul className='w-full justify-start user-popup'>
        <li>
            <button className='p-3 w-full text-left '>Edit profile</button>
        </li>
        <li>
            <button className='p-3 '>View profile</button>
        </li>
        <li>
            <button className='p-3 '>Account Setting</button>
        </li>
    </ul>
  )
}

export default UserPopup