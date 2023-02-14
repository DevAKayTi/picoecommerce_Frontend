import React from 'react'

//react-route
import { Navigate } from 'react-router-dom'

//react-redux
import { useSelector } from 'react-redux'

const PrivateRoutes = ({ children }) => {
    const { userInfo } = useSelector(state => state.authUser);

    return userInfo ? children : <Navigate to="/login" />;
}

export default PrivateRoutes