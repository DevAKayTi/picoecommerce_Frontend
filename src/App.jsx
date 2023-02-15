import React,{useState,useEffect} from 'react';

//react-router
import { useNavigate } from 'react-router-dom';

//react-redux
import { useDispatch} from 'react-redux';
import { authControl } from './store/reducer/auth';

// third-Party
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar'

//component
import Routes from './routes';
import { useHttp } from './hook/use-http';




const App = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const http = useHttp();

    const [readyDom,setReadyDom] = useState(false);
    const [progress, setProgress] = useState(0)

    const autoLoad = async() =>{
        setProgress(progress+30)         
        http.get('/api/user').then(
            response=>{
            setProgress(100);         
            dispatch(authControl({userInfo:response.data}));
            console.log(response)        
            setReadyDom(true);
            navigate('/');                    
        }).catch(
            err =>{    
            console.log(err)     
            setProgress(100);         
            setReadyDom(true);
                    
        })
        setReadyDom(true)
    }
    
    //autoLogin if cookie is exist
    useEffect(()=>{
        setProgress(10)
        autoLoad();
        setProgress(progress+60);;        
    },[]);

    return(
        <>
        {
            !readyDom ? 
            <LoadingBar color='#f11946' progress={progress}/>
            :
            <Routes/>
        }
        </>
        
    )
}

export default App