import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import {useForm} from 'react-hook-form'


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    if(user){
        console.log(user)
    }
    const onSubmit = data => console.log(data);
    return (
        <div className='flex h-screen justify-center items-center'>
           <div className='flex justify-center items-center'>
           <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">Login</h2>   

                <form onSubmit={handleSubmit(onSubmit)}>

                <div  className="form-control w-full max-w-xs">
                <label  className="label">
                    <span  className="label-text">email</span>
                </label>
                <input type="email"
                 placeholder="email"
                 {...register("email", 
                 {
                     required:{
                       value:true,
                       message:'email is required'
                     },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'provide a valid email' 
                    }
                  }
                 )} 
                   className="input input-bordered w-full max-w-xs" />
                <label  className="label">
                {errors.email?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
                     
                </label>
                </div>
                <div  className="form-control w-full max-w-xs">
                <label  className="label">
                    <span  className="label-text">password</span>
                </label>
                <input type="password"
                 placeholder="password"
                 {...register("password", 
                 {
                     required:{
                       value:true,
                       message:'password is required'
                     },
                    minLength: {
                      value: 6,
                      message: 'password must be 6' 
                    }
                  }
                 )} 
                   className="input input-bordered w-full max-w-xs" />
                <label  className="label">
                {errors.password?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
                     
                </label>
                </div>
                 <input className='btn w-full max-w-xs text-white' value="login" type="submit" />
                </form>

                <div className="divider">OR</div>                
                <button onClick={()=>signInWithGoogle()} className="btn btn-outline">Button</button>
            </div>
            </div>
           </div>
        </div>
       
    );
};

export default Login;