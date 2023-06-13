import React from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom'
import { useAuth } from './auth';

export default function Navbar() {
    const navStyles=({isActive})=>{
         return {
            textDecoration:isActive?'none':'solid',
            fontWeight:isActive?'bold':'normal'
         }
    }
    const {user} = useAuth();
  return (
    <>
    <nav>
   <NavLink style={navStyles} to="/">Home</NavLink>
    <NavLink style={navStyles} to="/about">About</NavLink>
    <NavLink style={navStyles} to="/products">Products</NavLink>
    <NavLink style={navStyles} to="/profile">Profile</NavLink>
     {user?"":<NavLink style={navStyles} to="/login">Login</NavLink>}
    </nav>
    </>
  )
}
