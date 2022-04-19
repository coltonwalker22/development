import React, {useContext} from 'react';
import {ThemeContext} from '../themeContext'

export default function Body(props){

    const {color, toggleTheme} = useContext(ThemeContext)

    return(
    <div className={`${color}-body-container`}>
        <h1 className={`${color}-text-description`}>Choose a light or dark theme with the button! All with useContext!</h1>
            <button onClick={toggleTheme} className={`${color}-button`}>Change Themes!</button>
    </div>

    )
}