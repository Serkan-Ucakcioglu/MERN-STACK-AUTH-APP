import React from "react";

function InputList({ register, errors }) {
  return (
    <>
      <div className="mb-2">
        <label
          for="email"
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
      <div className="mb-2">
        <label
          for="password"
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
