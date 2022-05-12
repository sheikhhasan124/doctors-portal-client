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

                <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">email</span>
                </label>
                <input type="email"
                 placeholder="email"
                 {...register("email", 
                 {
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: 'error message' // JS only: <p>error message</p> TS only support string
                    }
                  }
                 )} 
                  class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <span class="label-text-alt">Alt label</span> 
                </label>
                </div>

                
                {errors.firstName?.type === 'required' && "First name is required"}
                
                <input {...register("lastName", { required: true })} />
                {errors.lastName && "Last name is required"}
                
                <input type="submit" />
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