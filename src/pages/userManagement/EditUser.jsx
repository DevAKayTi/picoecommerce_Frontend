import React,{ useState ,useEffect} from 'react';

import { useParams,useNavigate } from 'react-router-dom';

//component
import { FormInput,FormSelect } from '../../component/form';
import AnimateButton from '../../component/button/AnimateButton';
import Button from '../../component/button/Button';
import { useHttp } from '../../hook/use-http';
import Loader from '../../component/Loader';

// third-party
import * as Yup from 'yup';
import { Formik,Form,Field } from 'formik';

//CSS
import './Style.css';

const EditUser = () => {

    let navigate = useNavigate();
    let {id} = useParams();
    const http = useHttp();

    const [userInfo,setUserInfo] = useState({}); 
    const [role,setRole] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                const response = await http.get(`/api/users/${id}/edit`);
                console.log(response);
                setRole(response.data.role);
                setUserInfo(response.data.userinfo);
            }catch(err){
                console.log(err.response.data);
                navigate('/error');

            }
        };
        fetchUser();
    },[]);

    return (
    <>
        <h2 className='text-2xl font-bold mb-4'>Update User</h2>
        <Formik
            enableReinitialize={true} 
            initialValues={{
                firstName:userInfo?.name?.split(' ')[0] ?? '',
                lastName:userInfo?.name?.split(' ')[1] ?? '',
                userName:userInfo?.username ?? '',
                password:'',
                confirmpassword:'',
                phone:userInfo?.phone ?? '',
                gender:userInfo?.gender == 1 ? "true" : 'false' ?? '' ,
                role:userInfo?.role?.id ?? '',
                email:userInfo?.email ?? '',
                isActive:userInfo?.is_active == 1 ? true : false ?? '',
            }}
            validationSchema={Yup.object().shape({
                firstName : Yup.string().max(255).required('Firstname is required'),
                lastName : Yup.string().max(255).required('Lastname is required'),
                userName : Yup.string().max(255).required('User Name is required'),
                password : Yup.string().max(255).required('Password is required'),
                phone : Yup.string().max(255).required('Phone Number is required'),
                gender: Yup.string().max(255).required('Choose Your Gender '),
                role: Yup.string().max(255).required('Role is required'),
                email : Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            })}
            onSubmit={async(values,{setSubmitting})=>{
                setLoading(true)
                const user = {
                    name : `${values.firstName} ${values.lastName}`,
                    username : values.userName,
                    password : values.password,
                    phone: values.phone,
                    gender:values.gender === 'true' ? true : false,
                    role:Number(values.role),
                    email:values.email,
                    isactive:values.isActive
                }
                try{
                    await http.post(`api/users/${id}/update`,
                        user
                    ).then(
                        response=>{
                        if(response){
                            navigate('/users');
                        }
                        setLoading(false);
                    }) 
                    setSubmitting(false);
                }catch (err) {
                    console.log(err.response.data)
                    setLoading(false);
                    setSubmitting(false);
                    navigate('/error');
                }
            }}
        >
            {
                ({values,handleBlur,handleChange,errors,touched,isValid,dirty})=>(
                    <Form>
                        <div className='bg-white p-6 rounded-md shadow-md mb-10'>
                            <div className='w-full pb-10'>
                                <div className='w-full md:flex'>
                                    <div className='form-grid mb-4 w-full md:pr-3'>
                                        <label htmlFor="firstName" className='form-labels font-semibold'>First Name</label>
                                            <FormInput
                                            width={'w-full'}
                                            type="text"
                                            id="firstName"
                                            value={values.firstName}
                                            name="firstName"
                                            placeholder="First Name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={Boolean(touched.firstName && errors.firstName)}
                                            />
                                        { touched.firstName && errors.firstName && (
                                            <div className='error-message'>{errors.firstName}</div>
                                        )}
                                    </div>
                                    <div className='form-grid mb-4 w-full md:pl-3'>
                                    <label htmlFor="lastName" className='form-labels font-semibold'>Last Name</label>
                                        <FormInput
                                        type="text"
                                        id="lastName"
                                        value={values.lastName}
                                        name="lastName"
                                        placeholder="Last Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(touched.lastName && errors.lastName)}
                                        />
                                    { touched.lastName && errors.lastName && (
                                        <div className='error-message'>{errors.lastName}</div>
                                    )}
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='form-grid mb-4 w-full'>
                                    <label htmlFor="email" className='form-labels font-semibold'>Email</label>
                                        <FormInput
                                        width={'w-2/3'}
                                        type="text"
                                        id="email"
                                        value={values.email}
                                        name="email"
                                        placeholder="Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(touched.email && errors.email)}
                                        />
                                    { touched.email && errors.email && (
                                        <div className='error-message'>{errors.email}</div>
                                    )}
                                    </div>
                                    <div className='form-grid mb-4 w-full'>
                                    <label htmlFor="phone" className='form-labels font-semibold'>Phone</label>
                                        <FormInput
                                        width={'w-2/3'}
                                        type="phone"
                                        id="email"
                                        value={values.phone}
                                        name="phone"
                                        placeholder="Phone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(touched.phone && errors.phone)}
                                        />
                                    { touched.phone && errors.phone && (
                                        <div className='error-message'>{errors.phone}</div>
                                    )}
                                    </div>
                                    
                                </div>
                                <div className='flex'>
                                    <label className='text-gray-600 font-semibold flex mt-8 mr-4 check-forms'>
                                        <Field type='radio' name='gender' value="true" className="w-6 h-6 mr-1 cursor-pointer hover:scale-110 transition-all duration-100"/>
                                        Male
                                    </label>
                                    <label className='text-gray-600 font-semibold flex mt-8 check-forms'>
                                        <Field type='radio' name='gender' value="false" className="w-6 h-6 mr-1 cursor-pointer hover:scale-110 transition-all duration-100"/>
                                        Female
                                    </label>
                                </div>
                                <label className='text-gray-600 font-semibold flex mt-8 check-forms'>
                                    <Field type='checkbox' name='isActive' checked={values.isActive} value={true} className="w-6 h-6 mr-3 cursor-pointer hover:scale-110 transition-all duration-100"/>
                                    is active ?
                                </label>

                            </div>
                        </div>
                        <div className='bg-white p-6 rounded-md shadow-md'>
                            <h3 className='text-lg font-semibold'>Roles and Permissions</h3>
                                <div className='w-full md:flex mt-10'>
                                    <div className='form-grid mb-4 w-full md:pr-3'>
                                        <label htmlFor="userName" className='form-labels font-semibold'>Username</label>
                                            <FormInput
                                            width={'w-full'}
                                            type="text"
                                            id="userName"
                                            value={values.userName}
                                            name="userName"
                                            placeholder="Username"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={Boolean(touched.userName && errors.userName)}
                                            />
                                        { touched.userName && errors.userName && (
                                            <div className='error-message'>{errors.userName}</div>
                                        )}
                                    </div>
                                    <div className='form-grid mb-4 w-full md:pl-3'>
                                        <label htmlFor="role" className='form-labels font-semibold'>Role</label>
                                        <FormSelect>
                                            <select value={values.role} name='role' className='w-full' onChange={handleChange}>
                                                {
                                                    role.map((val)=>(
                                                    <option key={val.id} value={val.id} className="text-gray-500">{val.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </FormSelect>
                                    { touched.role && errors.role && (
                                        <div className='error-message'>{errors.role}</div>
                                    )}
                                    </div>
                                </div>
                                <div className='w-full md:flex'>
                                    <div className='form-grid mb-4 w-full md:pr-3'>
                                        <label htmlFor="password" className='form-labels font-semibold'>Password</label>
                                            <FormInput
                                            width={'w-full'}
                                            type="text"
                                            id="password"
                                            value={values.password}
                                            name="password"
                                            placeholder="Password"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            error={Boolean(touched.password && errors.password)}
                                            />
                                        { touched.password && errors.password && (
                                            <div className='error-message'>{errors.password}</div>
                                        )}
                                    </div>
                                    <div className='form-grid mb-4 w-full md:pl-3'>
                                    <label htmlFor="confirmpassword" className='form-labels font-semibold'>Confirm Password</label>
                                        <FormInput
                                        type="text"
                                        id="confirmpassword"
                                        value={values.confirmpassword}
                                        name="confirmpassword"
                                        placeholder="Confirm Password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(touched.confirmpassword && values.password !== values.confirmpassword)}
                                        />
                                    { touched.confirmpassword && values.password !== values.confirmpassword && (
                                        <div className='error-message'>Should be same as Password</div>
                                    )}
                                    {/* { touched.confirmpassword && !values.password && (
                                        <div className='error-message'>Password not match</div>
                                    )} */}
                                    </div>
                                </div>
                        </div>
                        <div className='w-full flex justify-end mt-10'>
                                <div className='form-grid '>
                                    <AnimateButton>
                                        <Button 
                                            type="submit"
                                            bgColor="bg-blue-500"
                                            hoverColor="hover:bg-blue-900"
                                            width="w-[70px]"
                                            disable={!(isValid && dirty)}
                                        >
                                        {
                                            !loading ? "Update" : <Loader className='w-3 h-3'/> 
                                        }  
                                        </Button>
                                    </AnimateButton>
                                </div>
                            </div>
                    </Form> 
                )
            }
        </Formik>
    </>
)
}

export default EditUser