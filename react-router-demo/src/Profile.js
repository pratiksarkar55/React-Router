import React from 'react'
import { useAuth } from './auth';
import { useLocation } from 'react-router-dom';

export default function Profile() {
      const {user,logout} = useAuth();
  return (
    <>
        <div>User Name is {user}</div>
        <button onClick={()=>{logout()}}>Logout</button>
    </>
  )
}
