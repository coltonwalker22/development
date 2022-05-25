import React from 'react';


export default function Header(){
    return(
        <div className="header">
            <img src="colton.png" className="headshot"></img>
            <div className="name">Colton Walker</div>
            <div className="career">Web developer</div>
            <div className="link">coltonwalker.website</div>
            <div className="button-container"> 
                <button className="button-email">
                <img src="icons8-mail-16.png" className="email-icon"></img>
                <a className="email-text"href="">email</a>
                </button>
                <button className="button-linkedin">
                <img src="icons8-linkedin-16.png" className="linkedin-icon"></img>
                <a className="linkedin-text"href="">LinkedIn</a> 
                </button>

            </div>
        </div>
        
    )
}