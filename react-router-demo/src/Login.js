import React, { useState } from "react";
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    login(user);
    //navigate("profile", { replace: true }); gives /login/profile
    navigate("/profile", { replace: true });
  };
  const location = useLocation();
  console.log("location in login", location);
  return (
    <div>
      <label>
        Enter Username
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
