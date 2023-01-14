import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectedToken } from "../features/authSlice";

function RequireAuth() {
  const token = useSelector(selectedToken);
  if (token) {
    return <Outlet />;
  }
  console.log(token);
}

export default RequireAuth;
