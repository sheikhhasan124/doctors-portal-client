import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user)
    }
    return (
        <div>
             <button onClick={()=>signInWithGoogle()} className="btn btn-outline">Button</button>
        </div>
    );
};

export default Social;