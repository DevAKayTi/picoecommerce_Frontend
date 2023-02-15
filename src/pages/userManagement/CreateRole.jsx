import React, { useState,useEffect } from 'react';

// react-route
import { useNavigate } from 'react-router';

// component
import { FormInput } from '../../component/form';
import AnimateButton from '../../component/button/AnimateButton';
import Button from '../../component/button/Button';
import { useHttp } from '../../hook/use-http';
import Loader from '../../component/Loader';

// third-party
import * as Yup from 'yup';
import { Formik,Field } from 'formik';

// CSS
import './Style.css';

    const CreateRole = () => {

        const navigate = useNavigate();
        const http = useHttp();

        const [permission,setPermission] = useState([]);
        const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const createRole =async()=>{
            try{
                const response = await http.get('/api/permissions');
                setPermission(response.data);
            }catch(error){
                console.log(error);
            }
        };
        createRole();
        
    },[]);

    return (
        <>
            <h2 className='text-2xl font-semibold mb-4'>Create Roles</h2>
            <div className='bg-white p-6 rounded-md shadow-md'>
                <Formik 
                    initialValues={{
                        roleName:'',
                        checked:[]
                    }}
                    validationSchema={Yup.object().shape({
                        roleName : Yup.string().max(255).required('Password is required')
                    })}
                    onSubmit={async(values,{setSubmitting})=>{
                        setLoading(true)
                        const permissionCreate = {
                            roleName: values.roleName,
                            permission:values.checked.map((val)=>Number(val))
                        }
                        try{
                            await http.post('/api/roles/store',
                                permissionCreate
                            ).then(
                                response =>{
                                if(response){
                                    navigate('/roles');
                                }
                                setLoading(false);
                            })
                            setSubmitting(false);
                        }catch (err) {
                            setLoading(false);
                            setSubmitting(false);
                        }
                    }}
                >
                    {({values,handleBlur,handleChange,errors,touched,handleSubmit,isValid,dirty})=>(
                            <form onSubmit={handleSubmit}>
                                <div className='form-grid mb-4'>
                                        <FormInput
                                        htmlFor="role-name"
                                        label="Role Name"
                                        width={'w-1/3'}
                                        type="text"
                                        id="role-name"
                                        value={values.roleName}
                                        name="roleName"
                                        placeholder="Enter role name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={Boolean(touched.roleName && errors.roleName)}
                                        errorMessage={errors.roleName}
                                        />
                                </div>
                                <div id="checkbox-group" className='form-labels font-semibold text-medium text-gray-500'>Permissions</div>
                                <div role="group" aria-labelledby="checkbox-group">
                                        {
                                            permission?.map((value)=>(
                                                <div key={value.id} className='pt-6 border-b border-b-slate-200 md:flex permission-row'>
                                                    <div className='text-xl w-60'>{value.name}</div>
                                                    <div className='flex items-start flex-col'>
                                                        {
                                                            value.permissionfeature?.map((permi)=>(
                                                                <label key={permi.id} className='text-gray-600 flex items-center mb-6 check-forms'>
                                                                    <Field type="checkbox" name="checked" value={permi.id.toString()} className="w-6 h-6 mr-3 cursor-pointer hover:scale-110 transition-all duration-100"/>
                                                                    <span className='capitalize'>{permi.name} {value.name}</span>
                                                                </label>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                </div>
                                <div className='w-full flex justify-end'>
                                    <div className='form-grid '>
                                        <AnimateButton>
                                            <Button 
                                                type="submit"
                                                width="w-[70px]"
                                                bgColor="bg-blue-500"
                                                hoverColor="hover:bg-blue-900"
                                                disable={!(isValid && dirty)}
                                            >
                                            {
                                                !loading ? "Save" : <Loader className='w-3 h-3'/> 
                                            } 
                                            </Button>
                                        </AnimateButton>
                                    </div>
                                </div>
                            </form>
                        )}
                </Formik>
            </div>
        </>
      )
}

export default CreateRole