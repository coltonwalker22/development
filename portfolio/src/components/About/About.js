import React from 'react'
import Resume from './Resume.pdf'

export default function About() {
  return (
    <div className="about-container">

        <div className="about-section">
            <div className="about-img">
                <img alt="" src="images/colton.png"></img>
            </div>
            < div className="about-me">
                <h1>About</h1>
                <p> After receiving my high school diploma, I joined the Army as a
                    a Abrams Tank System Maintainer. I learned how to troubleshoot and solve 
                    problems with both electrical and mechanical components.
                    When I completed my ontract and was honorably discharge, I attended Motlow Stat
                    Commuinity College and received my  Associates in General Studies.
                    After being committed to certain career paths, I decided the tech field was what was best
                    for me. Web development has been the central focus of my life and strive to become better.
                    Other than web development, I play guitar, attend concerts, and play 
                    videogames on pc with my free time.
                </p>
                <div className="button-container">
                    <div className="button">
                        <a href={Resume} className="button-link" download> RESUME</a>
                    </div>
                    <div className="button">
                        <a href="https://github.com/coltonwalker22" className="button-link" download>GITHUB</a>
                    </div>
                    <div className="button">
                        <a href="https://google.com" className="button-link">LINKEDIN</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
