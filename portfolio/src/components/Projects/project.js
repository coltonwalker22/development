import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects() {
  return (
<div className='my-work' id='my-work'>
            <h2 className='my-work-heading'>My Work</h2>
            <span className='line'></span>
            <div className='carousel-wrapper'>
            <Carousel infiniteLoop
                      autoPlay
                    >
                <div className="project-container">
                    <h3 className='project-heading'>Movie FTW</h3>
                    <img src="images/movieapi.png" alt="" className='project-image' />
                    <div className='col2'>
                        <div className='view-code-btn' >
                            <a target="_blank" href="https://github.com/coltonwalker22/movieapi" className="button-link" rel="noopener noreferrer">View Code</a>
                        </div>
                        <div className='view-site-btn'>
                        <a target="_blank" href="https://movieftw.netlify.app" className="button-link" rel="noopener noreferrer">View Site</a>
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <h3 className='project-heading'>DJ React</h3>
                    <img src="images/djreact.png" alt="" className='project-image' />
                    <div className='col2'>
                        <div className='view-code-btn'>
                            <a target="_blank" href="https://github.com/coltonwalker22/djreact" className="button-link" rel="noopener noreferrer">View Code</a>
                        </div>
                        <div className='view-site-btn'>
                            <a href="https://coltonsdjreact.netlify.app/"  className="button-link" rel="noopener noreferrer">View Site</a>
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <h3 className='project-heading'>Meme Generator</h3>
                    <img src="images/memegenerator.png" alt="" className='project-image' />
                    <div className='col2'>
                    <div className='view-code-btn'>
                            <a target="_blank" href="https://github.com/coltonwalker22/memegenerator" className="button-link" rel="noopener noreferrer">View Code</a>
                        </div>
                        <div className='view-site-btn' >
                            <a target="_blank" href="https://colton-memegenerator.netlify.app/" className="button-link" rel="noopener noreferrer">View Site</a>
                        </div>
                    </div>
                </div>
            </Carousel>
            </div>
        </div>
  )
}
