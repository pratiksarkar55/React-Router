import React from "react";
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div>User Name is {user}</div>
      <button
        onClick={() => {
          navigate("/order-summary", { replace: true });
        }}
      >
        Confirm Order
      </button>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </>
  );
}
