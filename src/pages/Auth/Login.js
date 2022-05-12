import React from 'react';
import Social from './Social';


const Login = () => {
    
    return (
        <div className='flex h-screen justify-center items-center'>
           <div className='flex justify-center items-center'>
           <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                
                <div className="divider">OR</div>
                 <Social/>
            </div>
           </div>
        </div>
        </div>
    );
};

export default Login;