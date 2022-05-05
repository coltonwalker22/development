import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


export default function Navbar(){


    return(
    <div className="header">
      <h1>REACTIVE PLUMBING</h1>
      <ul className="nav">
        <li><Link className="link" to="/"> Home |</Link></li>
        <li><Link className="link" to="/about"> About |</Link></li>
        <li><Link className="link" to="/services">Services </Link></li>
      </ul> 
    </div>

    
    )
}