import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if(user){
        return children;
    }

    return <Navigate state={{from:location}}  to="/login" replace></Navigate>
};

export default PrivetRoute;