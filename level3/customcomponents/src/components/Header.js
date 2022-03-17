import React from 'react';

export default function Header(){
    return(
        <header>
            <nav className="nav-container">
                <img src="./logo192.png" className="nav-logo"/>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>          
            </nav>
        </header>
    )
}

// OR at the bottom of this page you can do 'export default Header