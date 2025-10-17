import React from 'react';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoutes = ({children}) => {
    const {accessToken} = useContext(AuthContext);
    if(!accessToken){
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoutes;
