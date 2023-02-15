import { lazy } from "react";

//component
import Loadable from '../component/Loadable';

//for outlet
import MinimalLayout from '../layouts/MinimalLayout';

//change-Pages
const AuthLogin = Loadable(lazy(() => import('../pages/authentication/Login')));
const Error = Loadable(lazy(() => import('../pages/error/ErrorPage')));
// const AuthRegister = Loadable(lazy(() => import('../pages/authentication/Register')));


const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <AuthLogin />
        },
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'error',
            element: <Error />
        }
        // {
        //     path: 'register',
        //     element: <AuthRegister />
        // }
    ]
};

export default LoginRoutes;