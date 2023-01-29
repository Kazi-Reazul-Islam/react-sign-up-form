import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Registration</h1>
        </div>
        <div>
          <label>Name : </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-label"
            {...register("name", { required: true })}
          />
          <error>
            {errors.name?.type === "required" && "Name is required"}
          </error>
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong formate"}
          </error>
        </div>
        <div>
          <label>Phone Number : </label>
          <input
            type="number"
            placeholder="Enter your phone number"
            {...register("number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <error>
            {errors.number?.type === "required" && "Phone number is required"}

            {errors.number?.type === "minLength" &&
              "Entered number is less then 6 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more then 12 digits"}
          </error>
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <error>
            {errors.password?.type === "required" && "Password is required"}
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </error>
        </div>
        <div>
          <input className="button" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
