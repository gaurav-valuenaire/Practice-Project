import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("First name is required")
    .min(2, "First name should have at least 2 characters"),
  last_name: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name should have at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should have at least 8 characters"),
  confirm_password: yup
    .string()
    .required("Confirm password is required")
    .min(8, "Password should have at least 9 characters")
    .oneOf(
      [yup.ref("password")],
      "Password and confirm password should be same"
    ),
});

const RHForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (values: any) => {
    console.log(values);
    reset();
  };

  return (
    <>
      <div className="w-screen h-screen grid place-items-center">
        <form
          className="flex flex-col gap-4 w-[300px]"
          onSubmit={handleSubmit(submitForm)}
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Enter first name"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("first_name")}
          />
          {errors.first_name && (
            <span className="text-red-500">{errors.first_name.message}</span>
          )}
          <input
            type="text"
            placeholder="Enter last name"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("last_name")}
          />
          {errors.last_name && (
            <span className="text-red-500">{errors.last_name.message}</span>
          )}
          <input
            type="email"
            placeholder="Enter email"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <input
            type="password"
            placeholder="Enter password"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
          <input
            type="password"
            placeholder="Confirm password"
            className="p-1 border border-gray-400 rounded-sm"
            {...register("confirm_password")}
          />
          {errors.confirm_password && (
            <span className="text-red-500">
              {errors.confirm_password.message}
            </span>
          )}
          <button className="bg-blue-400 p-1 text-white">Submit</button>
        </form>
      </div>
    </>
  );
};

export default RHForm;
