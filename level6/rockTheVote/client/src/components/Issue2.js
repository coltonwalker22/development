import React from 'react'

export default function issue(props) {
    const {user, title, description, datePosted, _id} = props


    //useffect(){
    // getAllComments(_id)

    // function getUserComments(){
        
    // }


  return (
    <div className="issue">
        <p>{user}</p>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <h3>{datePosted}</h3>
    </div>
  )
}
