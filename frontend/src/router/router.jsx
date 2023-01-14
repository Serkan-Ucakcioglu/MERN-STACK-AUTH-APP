import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import RequireAuth from "../components/RequireAuth";
import User from "../components/User";
import Login from "../features/login/Login";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path="/user" element={<User />} />
      </Route>
    </Route>
  )
);

export default router;
