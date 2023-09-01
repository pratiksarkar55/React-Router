import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
export default function Products() {
  const navStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "solid",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <>
      <div>Products</div>
      <nav>
        {/* not /featured-products as want /products/featured-products */}
        <NavLink style={navStyles} to="featured-products" replace={true}>
          Featured Products
        </NavLink>
        <NavLink style={navStyles} to="new-products" replace={true}>
          New Products
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
