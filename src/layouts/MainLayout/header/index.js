import React from 'react'

import HeaderContent from './headerContent';
import DrawerButton from './DrawerButton';

const Header = ({ open, onDrawerHandler }) => {

    return (
        <div className={`w-full bg-white h-[60px] flex items-center fixed border-b-1 border-gray-200 z-10 transition-all duration-500 ${open && 'md:pl-[260px]'}`}>
            <DrawerButton open={open} onDrawerHandler={onDrawerHandler} />
            <HeaderContent />
        </div >
    )
}

export default Header