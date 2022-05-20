import React, { useState } from 'react'

export default function Bounties(props){

    const [editMode, setEditMode] = useState(false)

    const [firstName, setFirstName] = useState(props.firstName)
    const [lastName, setLastName] = useState(props.lastName)
    const [isLiving, setIsLiving] = useState(props.isLiving)
    const [type, setType] = useState(props.type)
    const [credits, setCredits] = useState(props.credits)

    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName = (e) => setLastName(e.target.value)
    const handleType = (e) => setType(e.target.value)
    const handleIsLiving = (e) => setIsLiving(prevValue => !prevValue)
    const handleCredits = (e) => setCredits(e.target.value)

    function handleEdit(){
        if(editMode) props.editBounty( {firstName, lastName, isLiving, type, credits}, props._id)
        setEditMode(prevMode => !prevMode)
    }


    return(

        <div className="bounties-container">
            <div className="bounties">
            <h1>
                Name:
                {editMode ? 
                <>
                <input type="text" placeholder={firstName}   minlength= "1" maxlength="12" onInput={handleFirstName} />
                <input type="text" placeholder={lastName}  minlength= "1" maxlength="12" onInput={handleLastName} /> 
                </>
                :` ${firstName} ${lastName}`}
                
            </h1>
            <h1>
                Is Living: 
                { editMode ?
                <input type="checkbox" checked={isLiving} onInput={handleIsLiving}/>
                : ` ${String(isLiving).toUpperCase()}`}
            </h1>
            <h1>
                Alignment:
                {editMode ?
                <select onInput={handleType}>
                    <option >Select an Alignmnet</option>
                    <option value="jedi">Jedi</option>
                    <option value="sith">Sith</option>
                </select>   
                :` ${type}`}
            </h1>
            <h1>Credits: 
                {editMode ?
                <input type="number" min="1" max="99999" onInput={handleCredits} placeholder={credits}/>
                : ` ${credits}`}</h1>
            <button className="delete-button" onClick={() => props.deleteBounty(props._id)}>
                Delete
            </button>
            <button className="edit-button" onClick={handleEdit}>
                {editMode ? "Save" : "Edit"}
            </button>
            
            </div>
        </div>
    )
}