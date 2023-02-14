import React from 'react';


import DrawerContent from './drawerContent';
import DrawerHeader from './drawerHeader';

const Drawer = ({ open, onDrawerHandler }) => {
    return (
        <div>
            <div className={`${!open ? 'left-[-260px]' : 'left-0'} w-[260px] h-screen fixed bg-white border-r-1 border-gray-200 z-50 transition-all duration-500`}>
                < DrawerHeader />
                <DrawerContent />
            </div >
            {
                open && (
                    <div className='fixed z-40 w-screen h-screen bg-neutral-900 opacity-50 md:hidden' onClick={onDrawerHandler}></div>
                )
            }
        </div>

    )
}

export default Drawer