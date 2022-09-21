import React, {useContext} from 'react';
import {ThemeContext} from '../themeContext'

export default function Footer(props){

    const {color} = useContext(ThemeContext)

    return(
        <div className={`${color}-footer`}>

                <h1> Hello, I am a footer. Although I have no feet.</h1>


        </div>

    )
}