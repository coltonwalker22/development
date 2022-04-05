import React from 'react';
import Nav from './Nav'

export default function Header(){
    return(<div className="header-container">
    <Nav />
    <h1 className="header-title">TimeToGo</h1>
    </div>
    )
}