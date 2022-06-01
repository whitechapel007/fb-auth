import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setData(user);
  }, []);
  const [data, setData] = useState("a");

  if (!data || data == "") {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
