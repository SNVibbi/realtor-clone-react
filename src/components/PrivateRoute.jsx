import React from 'react';
import { Outlet, Navigate } from 'react-router';
import {UseAuthStatus} from '../hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = UseAuthStatus();
    if(checkingStatus){
        return <Spinner />;
    }
    return loggedIn ? <Outlet/> : <Navigate to="/sign-in" />
}

export default PrivateRoute;
