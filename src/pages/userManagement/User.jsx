import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

//react-redux
import { useDispatch, useSelector } from 'react-redux';
import { userValue } from '../../store/reducer/userManagement';

//component
import {TableStyle} from '../../component/table/index';
import { useHttp } from '../../hook/use-http';

//react-icon
import {AiOutlinePlus,AiOutlineEdit,AiOutlineDelete,AiOutlineEye} from 'react-icons/ai';

const User = () => {

    const dispatch = useDispatch();
    const {users} = useSelector((state)=>state.userManagement);
    const {permission} =useSelector(state=>state.authUser);
    const http = useHttp();

    const feature = permission.map(item=>item.id);

    // const [isLoading,setIsLoading] = useState(false);

    const fetchUserIndex =async()=>{
        try{
            const response = await http.get('/api/users');
            dispatch(userValue({users:response.data}));     
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchUserIndex();
    },[])


    const deleteUserHandler = async(id) => {
        try{
            await http.delete(`/api/users/${id}/destroy`);
            fetchUserIndex();
        }catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <>
            <h2 className='text-2xl font-bold mb-4'>Users</h2>
            <div className='bg-white p-6 rounded-md shadow-md'>
                <div className='w-full flex justify-between items-center pb-10'>
                    <h3 className='text-lg font-semibold'>All users</h3>
                    {
                        feature.includes(1) && (
                            <Link to='create' className='px-2 py-1 text-white flex items-center bg-blue-500 hover:bg-blue-800 duration-300 rounded-sm'><AiOutlinePlus className='mr-1'/>Add</Link>
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
                                <th>Username</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user)=>(
                                    <tr key={user.id}>
                                        <td className='text-gray-500'>{user.username}</td>
                                        <td>{user.name}</td>
                                        <td>{user.role.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                feature.includes(2) && (
                                                    <Link to={`${user.id}/edit`} className="md:float-left">
                                                        <button className='py-2 px-3 flex justify-center items-center bg-blue-400 hover:bg-blue-600 duration-300 rounded-sm text-white mr-3'><AiOutlineEdit className='mr-1'/>Edit</button>
                                                    </Link>
                                                )
                                            }
                                            {
                                                feature.includes(3) && (
                                                    <Link to={`${user.id}/view`} className="md:float-left">
                                                        <button className='py-2 px-3 flex justify-center items-center bg-green-400 hover:bg-green-600 duration-300 rounded-sm text-white mr-3'><AiOutlineEye className='mr-1'/>View</button>
                                                    </Link>
                                                )
                                            }
                                            {
                                                feature.includes(4) && (
                                                    <button onClick={()=>{deleteUserHandler(user.id)}} className='float-left py-2 px-3 flex justify-center items-center bg-rose-400 hover:bg-rose-600 duration-300 rounded-sm text-white'><AiOutlineDelete className='mr-1'/>Delete</button>    
                                                )
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                </TableStyle>
            </div>
        </>
)
}

export default User