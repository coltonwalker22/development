import React from 'react';
import {useNavigate} from 'react-router-dom';

function Footer() {
    const navigate = useNavigate()
  return (
      <>
      <div className="footer-container">
        <h1> INSTALL AND REAPIR IS THE NAME OF THE GAME!</h1>
        <button onClick={() => navigate("/")}>Return Home</button>

      </div>      
      </>
  )
}

export default Footer