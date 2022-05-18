import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query'
import Loading from "../Shared/Loading";

const AddDoctors = () => {
  const {register,formState: { errors }, handleSubmit,} = useForm();

const {data:services,isLoading}= useQuery('services',()=>fetch('http://localhost:5000/service').then(res=>res.json()))

const imageStorage_Key = '7b9935e9f253a9586f1b45588dd38ebf'

/**
 * 3 ways to store images
 * 1- third party storage // free open public storage is ok for practice
 * 2- your own storage in your own server(file system)
 * 3- databaser = mongodb
 * 
 * YUP: to validate file : seach yup file validation for react hook form 
*/
  const onSubmit = async(data) => {
   const image = data.image[0]
   const url = `https://api.imgbb.com/1/upload?key=${imageStorage_Key}`
   const formData = new FormData();
   formData.append('image', image)
   fetch(url,{
     method:'POST',
     body:formData
   })
   .then(res=>res.json())
   .then(result=>{
     if(result.success){
       const img = result.data.url;
       const doctor = {
         name : data.name,
         email : data.email,
         speciality : data.speciality,
         img : img
       }
     }
     // send to your data base the doctor info
    //  console.log('result',result)
   })
    //  console.log(data)
   };

   if(isLoading){
       return <Loading/>
   }

  return (
    <div>
      <h2 className="text-4xl text-purple-600">Add new doctors</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input
            type="name"
            placeholder="name"
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
              minLength: {
                value: 1,
                message: "provide a name",
              },
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
            {errors.name?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "provide a valid email",
              },
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">specility</span>
          </label>
          <select {...register("speciality")} class="select select-bordered w-full max-w-xs">
              {services.map(service=><option key={service._id} value={service.name} selected>{service.name}</option>)}
        </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: {
                value: true,
                message: "image is required",
              },
             
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
            
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          value="add"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctors;
