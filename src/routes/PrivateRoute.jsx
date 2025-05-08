import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoaderRing from '../components/LoaderRing';
import { notifyWarn } from '../utilities/notify';

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext)
    const { pathname } = useLocation()

    useEffect(()=>{
        if(!isLoading && !user){
            notifyWarn("You need to log in first.")
        }
    },[isLoading, user])

    if (isLoading) {
        return <div className="h-[80vh] flex items-center justify-center"><LoaderRing></LoaderRing></div>
    }

    if (!user) {
        return <Navigate to={'/login'} state={pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;