// jdi user admin hoi tahole admin/user page a access pabe....but onno user jde admin/user page link jekono vabe jene jai tahole se o access pabe, r aita thekate hobe

import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading';
import useAdmin from '../../Hook/useAdmin';
import { signOut } from 'firebase/auth';


const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoadin]=useAdmin(user)
     const location = useLocation()
    if(loading || adminLoadin){
        return <Loading/>
    }
    if(!user || !admin){
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;