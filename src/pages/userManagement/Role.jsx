import React,{useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

//react-redux
import { useDispatch, useSelector } from 'react-redux';
import { roleValue } from '../../store/reducer/userManagement';

//component
import {TableStyle} from '../../component/table/index';
import { useHttp } from '../../hook/use-http';

//react-icons
import {AiOutlinePlus,AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai';

const Role = () => {

    const dispatch = useDispatch();
    const {roles} = useSelector((state)=>state.userManagement);
    const {userInfo} = useSelector(state=>state.authUser);
    const {permission} =useSelector(state=>state.authUser);

    const http = useHttp();

    const [isLoading,setIsLoading] = useState(false);

    const feature = permission.map(item=>item.id);

    const fetchRole =async()=>{
        try{
            const response = await http.get('/api/roles');
            dispatch(roleValue({roles:response.data}));
            
        }catch(error){
            console.log(error);
        }
    };

    const deleteRoleHandler = async(id) => {
        setIsLoading(true);
        try{
            await http.delete(`/api/roles/${id}/destroy`);
            fetchRole();
            setIsLoading(false);
        }catch (err) {
            console.log(err.response.data);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchRole();
    },[]);

  return (
    <>
        <h2 className='text-2xl font-bold mb-4'>Roles</h2>
        <div className='bg-white p-6 rounded-md shadow-md'>
            <div className='w-full flex justify-between items-center pb-10'>
                <h3 className='text-lg font-semibold'>All roles</h3>
                {
                    feature.includes(1) && (
                        <Link to='create' className='px-2 py-1 text-white flex items-center bg-cyan-500 rounded-sm'><AiOutlinePlus className='mr-1'/>Add</Link>    
                    )
                }
            </div>
            <div className='flex justify-between items-center pb-6'>
                <div>
                    <span className='text-gray-500'>Show</span>
                    <select name="user" id="usershow" className='ml-2 border border-gray-200 w-18 px-2 py-1 outline-none'>
                        <option value="25" className='text-sm'>25</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                    </select> 
                </div>
                {/* <div>
                    <input type="text" name="usersearch" id="usersearch" />
                </div>  */}
            </div>
            <TableStyle>
                    <thead>
                        <tr>
                            <th>Roles</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            roles.map((role)=>(
                                <tr key={role.id}>
                                    <td className='text-gray-500 w-1/2'>{role.name}</td>
                                    <td>
                                    {
                                        feature.includes(2) && (
                                            <Link to={`${role.id}/edit`} className="float-left">
                                                <button className='py-2 px-3 flex justify-center items-center bg-blue-500 rounded-sm text-white mr-3'><AiOutlineEdit className='mr-1'/>Edit</button>
                                            </Link>
                                        )
                                    }
                                        
                                    {
                                        feature.includes(4) && (
                                            <button onClick={()=>{deleteRoleHandler(role.id)}} disabled={isLoading} className={`py-2 px-3 flex justify-center items-center bg-rose-500 rounded-sm text-white`}><AiOutlineDelete className='mr-1'/>Delete</button>                        
                                        )
                                    }
                                    </td>
                                </tr>
                            ))
                        }
                        {/* <tr>
                            <td className='text-gray-500'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className='flex items-center'>
                                <Link to={`${id}/edit`}>
                                <button className='py-2 px-3 flex justify-center items-center bg-blue-500 rounded-sm text-white mr-3'><AiOutlineEdit className='mr-1'/>Edit</button>
                                </Link>
                                <button onClick={()=>{deleteRoleHandler(id)}} className='py-2 px-3 flex justify-center items-center bg-rose-500 rounded-sm text-white'><AiOutlineDelete className='mr-1'/>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-gray-500'>Witchy Woman</td>
                            <td className='flex items-center'>
                                <button className='py-2 px-3 flex justify-center items-center bg-blue-500 rounded-sm text-white mr-3'><AiOutlineEdit className='mr-1'/>Edit</button>
                                <button className='py-2 px-3 flex justify-center items-center bg-rose-500 rounded-sm text-white'><AiOutlineDelete className='mr-1'/>Delete</button>
                            </td>
                        </tr> */}
                    </tbody>
            </TableStyle>
        </div>
    </>
  )
}

export default Role