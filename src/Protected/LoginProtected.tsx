import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginProtected: React.FC = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  }
  return <Navigate to = "/"/>;
};

export default LoginProtected;
