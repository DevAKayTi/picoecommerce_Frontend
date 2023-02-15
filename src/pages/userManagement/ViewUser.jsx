import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

//component
// import { FormSelect } from '../../component/form';
import AnimateButton from '../../component/button/AnimateButton';
import Button from '../../component/button/Button';
import { useHttp } from '../../hook/use-http';

//react-icon
import {AiOutlineEdit} from 'react-icons/ai';

//assets
import Avatar from '../../assets/images/user/avatar-1.jpg';

//CSS
import './ViewUser.css';

const ViewUser = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const http = useHttp();

    const [currentUser,setCurrentUser] = useState({});
    const {user} = currentUser;

    const userfilterHandler = (e) => {
        e.preventDefault();
        const changeId = e.target.value;
        return <Link to={`/users/${changeId}/view`}></Link>
    }

    useEffect(()=>{
        const fetchuser = async()=>{
            try{
                const response = await http.get(`/api/users/${id}/detail`);
                setCurrentUser(response.data);
                console.log(response);
            }catch(err){
                console.log(err.response.data);
                navigate('/error');
            }
        }
        fetchuser();
    },[]);
  return (
    <>
        <div className='w-full flex mb-4'>
                <h2 className='w-full text-2xl font-bold'>View User</h2>
                {/* <FormSelect>
                <select className='w-2/3 ml-auto' value={user?.id} id="userfilter" onChange={userfilterHandler}>
                    {
                        userfilter?.map((op)=>(
                            <option key={op.id} value={op.id}>{op.name}</option>
                        ))
                    }
                </select>
                </FormSelect> */}
        </div>
        <div className='bg-white p-6 rounded-md shadow-md mb-10 w-1/3'>
                <div className='flex justify-center items-center flex-col mb-3'>
                    <div className='w-28 h-28 rounded-full overflow-hidden'>
                        <img src={Avatar} alt="avatar" />
                    </div>
                    <span className='text-xl font-semibold'>{user?.name}</span>
                    <span className='text-sm text-gray-500'>{user?.role.name}</span>
                </div>
                <ul className='userinfo'>
                    <li>
                        <span className='font-semibold'>Username</span>
                        <span  className='text-gray-500'>{user?.username}</span>
                    </li>
                    <li>
                        <span className='font-semibold'>Role</span>
                        <span  className='text-gray-500'>{user?.role.name}</span>
                    </li>
                    <li>
                        <span className='font-semibold'>Email</span>
                        <span className='text-gray-500'>{user?.email}</span>
                    </li>
                    <li>
                        <span className='font-semibold'>Phone Number</span>
                        <span className='text-gray-500'>{user?.phone}</span>
                    </li>
                    <li>
                        <span className='font-semibold'>Gender</span>
                        <span className='text-gray-500'>{user?.gender ? 'Male' : "Female"}</span>
                    </li>
                    <li>
                        <span className='font-semibold'>Acitve</span>
                        <span className={`text-gray-500 w-4 h-4 rounded-full ${user?.is_active ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    </li>
                </ul>
                <div className='form-grid ml-auto mt-6'>
                    <Link to={`/users/${id}/edit`}>
                        <AnimateButton>
                            <Button 
                                type="button"
                                bgColor="bg-blue-500"
                                hoverColor="hover:bg-blue-900"
                                width="w-full"
                            >
                                <AiOutlineEdit className='mr-2'/>Edit 
                            </Button>
                        </AnimateButton>
                    </Link>
                    
                </div>
        </div>
    </>
  )
}

export default ViewUser