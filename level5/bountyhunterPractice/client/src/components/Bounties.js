import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.js'

export default function Bounties(props){
    const {firstName, lastName, living, type, credits, _id, deleteJediBounty,
     deleteSithBounty, editJediBounty, submit}  = props
    const [editToggle, setEditToggle] = useState(false)
    return(

        <div className="bounties">
            { !editToggle ?
            <>
            <h1>{firstName} {lastName}</h1>
            <h1>{living}</h1>
            <h1>{type}</h1>
            <h1>{credits}</h1>
            <button 
                className="delete-button"
                onClick={() => deleteJediBounty(_id)}>
                Delete
            </button>
            <button
            className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >Edit</button>
            </>
        :
        <>
            <AddBountyForm 
            firstName={firstName}
            lastName={lastName}
            submit ={editJediBounty}
            btnText="Submit Edit"/>
              <button
            className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >Close</button>
        </>
            }
        </div>
    )
}