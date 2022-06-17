import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar(props) {

  let navigate = useNavigate()
  const { logout } = props

    function onClickLogout(){ 
      logout();
      navigate("/");
    }

  return (
    <div className="navbar">
        <Link to="/profile">Profile</Link>
        <Link to="/public">Public</Link>
        <button onClick={onClickLogout}>logout</button>
    </div>
  )
}
