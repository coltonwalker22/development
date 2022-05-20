import React, {useState} from 'react';

export default function AddBountyForm(props){
    const {firstName, lastName, living, type, credits, _id, submit}  = props

    const initInputs = { 
        firstName: firstName || "", 
        lastName: lastName || "",
    //     // living: true,
    //     // type: "",
    //     // credits: 0
     }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(event){
        const {name, value} = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }


    function handleSubmit(event){
        event.preventDefault()
        submit(inputs, _id)
        //post request
        setInputs(initInputs)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="firstName" 
            value={inputs.firstName} 
            onChange={handleChange} 
            placeholder="First Name"/>
            <input 
            type="text" 
            name="lastName" 
            value={inputs.lastName} 
            onChange={handleChange} 
            placeholder="Last Name"/>
            <button>{props.btnText}</button>
        </form>
    )
}