import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const userParam = useParams();
    console.log(userParam);
  return (
    <div>User Details for {userParam.id}</div>
  )
}
