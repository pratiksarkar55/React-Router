import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export default function Navbar() {
  const navStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "solid",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  const { user } = useAuth();
  return (
    <>
      <nav>
        <NavLink style={navStyles} to="/" replace={true}>
          Home
        </NavLink>
        <NavLink style={navStyles} to="/about" replace={true}>
          About
        </NavLink>
        <NavLink style={navStyles} to="/products" replace={true}>
          Products
        </NavLink>
        <NavLink style={navStyles} to="/profile" replace={true}>
          Profile
        </NavLink>
        {user ? (
          ""
        ) : (
          <NavLink style={navStyles} to="/login" replace={true}>
            Login
          </NavLink>
        )}
      </nav>
    </>
  );
}
