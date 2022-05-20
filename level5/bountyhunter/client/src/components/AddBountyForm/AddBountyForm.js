import React, {useState} from 'react';

export default function AddBountyForm(props){
    const {submit} = props
    
    const [ firstName, setFirstName] = useState("")
    const [ lastName, setLastName] = useState("")
    const [ type, setType] = useState("")
    const [ isLiving, setIsLiving] = useState(false)
    const [ credits, setCredits] = useState(0)

    

    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName = (e) => setLastName(e.target.value)
    const handleType = (e) => setType(e.target.value)
    const handleIsLiving = (e) => setIsLiving((prevValue) => !prevValue)
    const handleCredits = (e) => setCredits(e.target.value)

    

    function handleSubmit(e){
        e.preventDefault()
        const newBounty = { 
            firstName,
            lastName,
            isLiving,
            type,
            credits
        }
        submit(newBounty)
        // submit(inputs, _id)
        // //post request
        // setInputs(initInputs)
    }

    return (
        <div className="form-container">
        <form id="bountyForm" onSubmit={handleSubmit}>
            <div className="name-container">
            <h1>Name:</h1>
            <input 
                type="text" 
                name="firstName" 
                placeholder="First Name"
                minlength= "1" 
                maxlength="12"
                onInput={handleFirstName}
                />
            <input 
                type="text" 
                name="lastName"     
                placeholder="Last Name"
                minlength= "1" 
                maxlength="12"
                onInput={handleLastName}
                />
            </div>
            <div className="type-container">
            <h4>Alignmnet:</h4>
            <select onInput={handleType}>
                <option >Select an Alignmnet</option>
                <option value="jedi">Jedi</option>
                <option value="sith">Sith</option>
            </select>
            </div>
            <div className="isLiving-container">
            <h4>is Living:</h4>
            <input
                className="checkbox"
                type="checkbox"
                name="isLiving"
                onInput={handleIsLiving}
            />
            </div>
            <div className="credits-container">
            <h4>credits:</h4>
            <input 
                type="number"
                name="credits"
                min="1"
                max="9999"
                onInput={handleCredits}
            />
            </div>
            <button className="submit-button" type="submit">Submit Data</button>
        </form>      
        </div>
    )
}