import React, { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';


// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { authControl, authToken } from '../../../../../store/reducer/auth';

// react-icon
import { AiOutlineLogout } from 'react-icons/ai';

// component
import Popper from '../Popper';
import UserPopup from './UserPopup';
import OutsideClickHandler from '../../../../../component/outsideclickhandler';
import { useHttp } from '../../../../../hook/use-http';

// third Party
import axios from 'axios';

// assets
import avatar from '../../../../../assets/images/user/avatar-1.jpg';


const Profile = () => {

  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const http = useHttp();
  const {userInfo,token} = useSelector(state=>state.authUser);

  const [open,setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen(prev => !prev);
  }

  const closeHandle = (event) => {

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      console.log('no')
        return;
    }
    console.log(anchorRef.current);
    setOpen(false);
  };

  const logoutHandler = async()=>{
     try{
        http.post('api/logout').then(
          response=>{
            dispatch(authControl({userInfo:null}));
            dispatch(authToken({token:null}));
            navigate('/login');
            console.log(response.data);
          }
        )
     }catch(err){
        console.log(err.response.data);
     }
  }
  console.log(userInfo,token);

  return (
    <div className='relative ml-3'>
      <button
        className='px-2 py-1 flex items-center rounded-lg cursor-pointer hover:bg-gray-100'
        onClick={toggleHandler}
      >
        <img src={avatar} alt="avatar-1" className='w-8 h-8 rounded-full mr-3'/>
        <h4 className='text-sm font-semibold tracking-wide'>{userInfo?.name}</h4>
      </button>
      {
        open && (
          <OutsideClickHandler onClickaway={closeHandle}>
            <Popper>
              <div ref={anchorRef} className='main w-[240px]'>
                <div className='flex items-center justify-between p-4'>
                  <div className='flex items-center'>
                    <div>
                        <img src={avatar} alt="avatar" className='w-10 h-10 rounded-full'/>
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-md tracking-wide'>{userInfo?.name}</h3>
                      <h5 className='text-sm text-gray-400'>{userInfo?.role?.name}</h5>
                    </div>
                  </div>
                  <button onClick={logoutHandler} className='p-3 rounded-full hover:bg-gray-100'> 
                    <AiOutlineLogout className='w-6 h-6 text-gray-500'/>
                  </button>
                </div>
                <UserPopup/>    
              </div>
            </Popper>
          </OutsideClickHandler>

        )
      }  
    </div>
  )
}

export default Profile