import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectedToken } from "../features/authSlice";

function RequireAuth() {
  const token = useSelector(selectedToken);
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}

export default RequireAuth;
