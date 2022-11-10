import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../context/ContextProvider';
import Loading from '../smallPages/Spinner/Loading';

const PrivateRoute = ({children}) => {
    const {user,isloding} = useContext(userContext);
    const location =useLocation();
    if(isloding){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return (
        children
    );
};

export default PrivateRoute;