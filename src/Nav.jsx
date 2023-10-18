import { Link, NavLink, Outlet } from "react-router-dom";
import React from 'react'


export default function Nav() {
  let activeStyle = {
    textDecoration: 'underline',
  }
  return (
    <>
    <nav className='navbar'>
      <div className="container">
      <ul className="nav-links">
        <NavLink to="/colors/" style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
        <NavLink to="/colors/new" style={({isActive}) => (isActive ? activeStyle : undefined)}>New Color</NavLink>
      </ul>
      </div>
    </nav>
    <Outlet/>
    </>
  )
}
