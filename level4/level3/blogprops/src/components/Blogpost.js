import React from 'react'

export default function blogpost({title, subTitle, author, date}){
    return(
        <div className="blogpost-container">
            <h3 className="post--title">{title}</h3>
            <h2 className="post--subtitle">{subTitle}</h2>
            <div className="author-date-container">
                <p className="post--author">Posted by {author}</p>
                <p className="post--date"> on {date}</p>
            </div>
        </div>
    
    )
}