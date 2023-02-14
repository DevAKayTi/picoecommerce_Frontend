import React, { useEffect } from 'react';

//react-route
import { useNavigate } from 'react-router-dom';

//react-redux
import { useDispatch, useSelector} from 'react-redux';
import { authControl,authToken } from '../../../store/reducer/auth';

// Component
import {FormInput} from '../../../component/form';
import Button from '../../../component/button/Button';
import FireBaseSocial from './FireBaseSocial';
import AnimateButton from '../../../component/button/AnimateButton';
import {useHttp} from '../../../hook/use-http';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// css
import './AuthInput.css';

const AuthLogin = () => {

    const {token} = useSelector(state=>state.authUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const http = useHttp(token);

    // const [checked,setChecked] = useState(false);
    // const [showPassword,setShowPassword] = useState(false);

    useEffect(()=>{
        const requestUser = async()=>{
        try{
            const user = await http.get('/api/user');
            console.log(user.data);
            dispatch(authControl({userInfo:user.data}));
            navigate('/');
        }catch(err){
            console.log(err);
        }
        
    }
        if(token){
            requestUser();
        }
    },[]);
    
  return (
    <>
        <Formik 
        initialValues={{
            email : '',
            password : '',
            submit : null
        }}

        validationSchema={Yup.object().shape({
            email : Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password : Yup.string().max(255).required('Password is required')
        })}

        onSubmit={async(values,{setSubmitting})=>{

            const userLogin = {
                email : values.email,
                password:values.password
            }

            try{

                const csrf = await http.get('/sanctum/csrf-cookie');
                console.log(csrf);

                const login = await http.post('api/login',userLogin);
                console.log(login);
                dispatch(authToken({token:login.data.message}));

                navigate('/');
                setSubmitting(false);
            }catch (err) {
                console.log(err.response.data);
                setSubmitting(false);
            }
        }}>
        {
            ({values,handleBlur,handleChange,handleSubmit,errors,touched,isValid,dirty})=>(
                <form onSubmit={handleSubmit}>
                    <div>

                        <div className='form-grid'>
                            <FormInput
                                htmlFor="email-login"
                                label = "Email Address"
                                type="text"
                                id="email-login"
                                value={values.email}
                                name="email"
                                placeholder="Enter email address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={Boolean(touched.email && errors.email)}
                                errorMessage = {errors.email}
                            />
                        </div>

                        <div className='form-grid'>
                            <FormInput 
                                // type={showPassword ? 'text': 'password'}
                                htmlFor="password-login"
                                label="Password"
                                id='password-login' 
                                value={values.password}
                                name='password'
                                placeholder='Enter password'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error = {Boolean(touched.password && errors.password)}
                            />
                        </div>

                        <div className='form-grid'>
                            <AnimateButton>
                                <Button 
                                    type="submit"
                                    bgColor="bg-blue-500"
                                    hoverColor="hover:bg-blue-900"
                                    disable={!(isValid && dirty)}
                                >
                                    Login 
                                </Button>
                            </AnimateButton>
                        </div>

                        <div className='form-grid'>
                            <div className='divider'>
                                <span>Login with</span>
                            </div>
                        </div>
                        
                        <FireBaseSocial/>
                        
                    </div>
                </form>
            )
        }
            
        </Formik>
    </>
  )
}

export default AuthLogin