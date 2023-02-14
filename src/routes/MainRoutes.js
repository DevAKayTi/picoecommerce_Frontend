import { lazy } from "react";


//component
import Loadable from "../component/Loadable";

//for outlet
import MainLayout from "../layouts/MainLayout";

//for auth
import PrivateRoute from "./PrivateRoute";


//change Pages
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/Dashboard')));
const User = Loadable(lazy(() => import('../pages/userManagement/User')));
const CreateUser = Loadable(lazy(() => import('../pages/userManagement/CreateUser')));
const EditUser = Loadable(lazy(() => import('../pages/userManagement/EditUser')));
const ViewUser = Loadable(lazy(() => import('../pages/userManagement/ViewUser')));
const Role = Loadable(lazy(() => import('../pages/userManagement/Role')));
const CreateRole = Loadable(lazy(() => import('../pages/userManagement/CreateRole')));
const EditRole = Loadable(lazy(() => import('../pages/userManagement/EditRole')));

const MainRoutes = {
    path: '/',
    element:
        <PrivateRoute>
            <MainLayout />
        </PrivateRoute>
    ,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: 'users',
            element: < User />
        },
        {
            path: 'users/create',
            element: < CreateUser />
        },
        {
            path: 'users/:id/edit',
            element: < EditUser />
        },
        {
            path: 'users/:id/view',
            element: < ViewUser />
        },
        {
            path: 'roles',
            element: <Role />
        },
        {
            path: 'roles/create',
            element: <CreateRole />
        },
        {
            path: 'roles/:id/edit',
            element: <EditRole />
        },
    ]
}

export default MainRoutes;