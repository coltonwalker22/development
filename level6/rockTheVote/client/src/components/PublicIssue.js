import React from 'react'

export default function PublicIssue(props) {
    const {user, title, description, datePosted, _id} = props

 

    return(
    <div className="issue-container">
        <div className="publicIssue">
            <p>{user}</p>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>{datePosted}</h3>
        </div>
    </div>
    )
}