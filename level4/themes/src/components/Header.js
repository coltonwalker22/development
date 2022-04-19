import React, {useContext} from 'react';
import {ThemeContext} from "../themeContext"

export default function Header(props) {
 
    const {color} = useContext(ThemeContext)

    return(
        <nav className={`${color}-nav`}>
            <h1>home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
        </nav>
    )
}