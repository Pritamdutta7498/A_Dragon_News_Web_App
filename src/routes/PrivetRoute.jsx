import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const PrivetRoute = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;