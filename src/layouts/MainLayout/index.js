import React, { useState } from "react";
import { Outlet } from "react-router-dom"

import Drawer from './sideBar';
import Header from './header';
import { useDispatch, useSelector } from "react-redux";

import { openDrawer } from "../../store/reducer/menuBar";


export const MainLayout = () => {
    const dispatch = useDispatch();
    const { drawerOpen } = useSelector((state) => state.menuBar);

    // drawerhandle
    const [isOpen, setIsOpen] = useState(drawerOpen);
    const drawerHandler = () => {
        setIsOpen(!isOpen);
        dispatch(openDrawer({ drawerOpen: !isOpen }));
    }


    return (
        <div className="flex w-full min-h-screen">
            <Header open={isOpen} onDrawerHandler={drawerHandler} />
            <Drawer open={isOpen} onDrawerHandler={drawerHandler} />
            <div className={`w-full p-6 mt-[60px] bg-gray-100 transition-all duration-500 ${isOpen && 'md:ml-[260px]'}`}>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;