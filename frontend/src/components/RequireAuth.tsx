import { Navigate, Outlet } from "react-router-dom";
import { selectedToken } from "../features/authSlice";
import { useAppSelector } from "../hooks/hooks";

function RequireAuth() {
  const token = useAppSelector(selectedToken);
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default RequireAuth;
