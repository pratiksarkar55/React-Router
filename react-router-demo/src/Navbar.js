import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Navbar() {
    const navStyles=({isActive})=>{
         return {
            textDecoration:isActive?'none':'solid',
            fontWeight:isActive?'bold':'normal'
         }
    }
  return (
    <nav>
   <NavLink style={navStyles} to="/">Home</NavLink>
    <NavLink style={navStyles} to="/about">About</NavLink>
    </nav>
  )
}
