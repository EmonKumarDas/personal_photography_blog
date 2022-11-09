import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../context/ContextProvider';

const PrivateRoute = ({children}) => {
    const {user,isloding} = useContext(userContext);
    const location =useLocation();
    if(isloding){
        return <div className='flex justify-center my-32'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
        </div>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return (
        children
    );
};

export default PrivateRoute;