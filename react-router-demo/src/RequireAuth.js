import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const location = useLocation();
  console.log("location in require auth", location);
  const { user } = useAuth();
  if (!user) {
    //state={{path:location.pathname}}
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ path: location.pathname }}
      />
    );
  }
  return children;
}
