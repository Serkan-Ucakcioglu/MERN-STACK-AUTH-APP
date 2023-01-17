import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToken, removeToken, selectedToken } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import {
  useLogoutMutation,
  useRefreshMutation,
  useTestMutation,
} from "../features/login/loginSlice";

function User() {
  const token = useSelector(selectedToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [refresh, { data, isSuccess }] = useRefreshMutation();
  const [Test] = useTestMutation();
  const [Logout] = useLogoutMutation();

  const logOut = () => {
    Logout();
    dispatch(removeToken());
    navigate("/login");
  };
  console.log(token, "token");

  useEffect(() => {
    if (isSuccess) {
      dispatch(addToken(data));
    }
  }, [isSuccess]);
  return (
    <div
      className="w-full h-screen flex items-center justify-center
  "
    >
      <div className="w-1/2 h-[500px] bg-black p-3 flex flex-col">
        <button
          onClick={refresh}
          className="h-8 w-[80px] rounded border-white border text-black bg-white"
        >
          refresh
        </button>
        <textarea
          className="mt-2 bg-black text-white"
          cols="30"
          value={token}
          rows="10"
          disabled
        ></textarea>
        <button
          onClick={logOut}
          className="h-8 w-[80px] rounded border-white border text-black bg-white"
        >
          LogOut
        </button>
        <button
          onClick={Test}
          className="h-8 mt-2 w-[80px] rounded border-white border text-black bg-white"
        >
          {" "}
          test{" "}
        </button>
      </div>
    </div>
  );
}

export default User;
