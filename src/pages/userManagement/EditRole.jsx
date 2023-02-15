import React,{useEffect, useState} from 'react';

import { useParams,useNavigate } from 'react-router-dom';

//component
import { FormInput } from '../../component/form';
import AnimateButton from '../../component/button/AnimateButton';
import Button from '../../component/button/Button';
import { useHttp } from '../../hook/use-http';
import Loader from '../../component/Loader';

// third-party
import * as Yup from 'yup';
import { Formik,Form,Field } from 'formik';

//CSS
import './Style.css';

const EditRole = () => {

    let navigate = useNavigate();
    let {id} = useParams();
    const http = useHttp();

    const [roleId,setRoleId] = useState({}); 
    const [permission,setPermission] = useState([]);
    const [loading,setLoading] = useState(false);

    const permissionFeature = roleId.permission?.map((val)=>val.id.toString());

    useEffect(()=>{
        const fetchRole =async()=>{
            try{
                const response = await http.get(`/api/roles/${id}/edit`);
                setPermission(response.data.role_permission);
                setRoleId(response.data.role_name);
            }catch(err){
                console.log(err);
            }
        };
        fetchRole();
    },[id])

    return (
      <>
          <h2 className='text-2xl font-semibold mb-4'>Edit Roles</h2>
          <div className='bg-white p-6 rounded-md shadow-md'>
              <Formik
                enableReinitialize={true} 
                  initialValues={{
                      roleName:roleId?.name ?? '',
                      checked:permissionFeature ?? []
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
                        await http.post(`api/roles/${id}/update`,
                        permissionCreate
                        ).then(
                            response=>{
                                if(response){
                                    setRoleId(response.data);
                                    setLoading(false);
                                    navigate('/roles');
                                }
                            }
                        )
                        setSubmitting(false);
                    }catch (err) {
                        console.log(err.response.data)
                        setLoading(false);
                        setSubmitting(false);
                    }
                  }}
              >
                  {
                      ({values,handleBlur,handleChange,handleSubmit,errors,touched,isValid,dirty})=>(
                          <Form onSubmit={handleSubmit}>
                              <div className='form-grid mb-4'>
                                  <label htmlFor="role-name" className='form-labels font-semibold'>Role Name</label>
                                      <FormInput
                                      width={'w-1/3'}
                                      type="text"
                                      id="role-name"
                                      value={values.roleName}
                                      name="roleName"
                                      placeholder="Enter role name"
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      error={Boolean(touched.roleName && errors.roleName)}
                                      />
                                  { touched.roleName && errors.roleName && (
                                      <div className='error-message'>{errors.roleName}</div>
                                  )}
                              </div>
                              <div id="checkbox-group" className='form-labels font-semibold'>Permissions</div>
                              <div role="group" aria-labelledby="checkbox-group">
                                    {
                                            permission?.map((value)=>(
                                                <div key={value.id} className='pt-3 border-b border-b-slate-200 md:flex permission-row'>
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
          </div>
      </>
    )
}


export default EditRole