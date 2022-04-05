import React, {useState} from 'react';
import Listitem from './Listitem';
import {v4 as uuidv4} from 'uuid';



export default function Body(){
    const [formData, setFormData] = useState([])

    const [newEntry, setNewEntry] = useState('')
    console.log(newEntry)


    function handleChange(event) {
        setNewEntry(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault()
    setFormData(prevFormData => [...prevFormData, newEntry])
    }

    return(
        <form onSubmit={handleSubmit}>
        <h1>{newEntry}</h1>
        <input type="text" onChange={handleChange} placeholder="name entry"/>
        <button>add new item</button>
        <Listitem key={uuidv4()} data={formData} id={uuidv4()} />

        </form>
    )
} 