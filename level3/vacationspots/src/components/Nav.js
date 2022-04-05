import React from 'react';

export default function Nav(){
    return (    
    <nav className="nav">
        <h1 className="nav--title">Find your getaway...</h1>
        <ul className="nav-list-container">
            <li className="nav--options">HOME |</li>
            <li className="nav--options">ABOUT |</li>
            <li className="nav--options">FAQ</li>
        </ul>
    </nav>)
}