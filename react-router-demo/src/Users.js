import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export default function Users() {
  const [searchParams,setSearchParams] = useSearchParams();
  let isFiltered = searchParams.get('filter');
  console.log(searchParams);
  return (
    <>
     <div style={{fontWeight:"bold"}}>Users 1</div>
    <div style={{fontWeight:"bold"}}>Users 2</div>
    <div style={{fontWeight:"bold"}}>Users 3</div>
    <Outlet />
    <div>{isFiltered?'Filtered Users':'All Users'}</div>
    <button onClick={()=>{setSearchParams({filter:true})}}>Apply Filters</button>
    <button onClick={()=>{setSearchParams()}}>Reset Filters</button>
    </>
  )
}
