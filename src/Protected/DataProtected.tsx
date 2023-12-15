import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const DataProtected: React.FC = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Outlet />;
  }
  return <Navigate to = "/data"/>;
};

export default DataProtected;
