import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToken } from "../authSlice";
import InputList from "./InputList";
import { useLoginMutation } from "./loginSlice";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Login, { isSuccess, data }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(addToken(data.accessToken));
      navigate("/user");
    }
  }, [isSuccess]);

  const onSubmit = (datas) => {
    Login(datas);
  };
  return (
    <>
      {" "}
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <InputList register={register} errors={errors} />

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
