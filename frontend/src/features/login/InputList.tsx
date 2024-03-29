import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ILOGIN } from "./loginSlice";

type IFORM = {
  register: UseFormRegister<ILOGIN>;
  errors: FieldErrors<ILOGIN>;
};

function InputList({ register, errors }: IFORM) {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800"
        >
          Email
        </label>
        <input
          type="name"
          {...register("username", {
            required: "required!",
            minLength: {
              value: 4,
              message: "minimum length 4",
            },
            maxLength: {
              value: 11,
              message: "maximum length 11",
            },
          })}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <span className="text-red-500 text-left text-m">
          {errors?.username?.message}
        </span>
      </div>
      <div className="mt-4">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-800"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "required!",
            minLength: {
              value: 5,
              message: "minimum length 5",
            },
            maxLength: {
              value: 15,
              message: "maximum length 15",
            },
          })}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <span className="text-red-500 text-left text-m">
          {errors?.password?.message}
        </span>
      </div>
    </>
  );
}

export default InputList;
