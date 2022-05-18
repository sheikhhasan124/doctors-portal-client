import React from "react";
import { useForm } from "react-hook-form";

const AddDoctors = () => {
  const {register,formState: { errors }, handleSubmit,} = useForm();

  const onSubmit = async(data) => {
   
     // console.log('update done')
   };
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
          <input
            type="text"
            placeholder="specility"
            {...register("password", {
              required: {
                value: true,
                message: "specility is required",
              },
              
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
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
