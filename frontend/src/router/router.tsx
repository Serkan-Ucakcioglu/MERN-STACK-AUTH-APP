import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Login from "../features/login/Login";
import RequireAuth from "../components/RequireAuth";
import User from "../components/User";

const router = createBrowserRouter(
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
