import React, {useState, useContext} from 'react';
import {FormContext} from '../formContextProvider'






export default function Thing(props) {
    const {title, description, imgUrl, deleteUglyThing, _id, updateUglyThing} = props

    const {newInput, setNewInput} = useContext(FormContext)

    console.log("title:", title, "description:", description)

    const [editMode, setEditMode] = useState(false)
 
    function editThing(e){
        e.preventDefault()
        
        updateUglyThing(_id, newInput)
        setNewInput({
            title: "",
            description: ""
        })

        setEditMode(false)

    }

    
    function deleteThing(e){
        e.preventDefault()
        deleteUglyThing(_id)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setNewInput(prevThing => ({...prevThing, [name]: value}))
    }
  return (
    <>
 { !editMode &&     
    <div>
        <h1 className="title">{title}</h1>
        <img src={imgUrl} alt=""></img>
        <h1 className="description">{description}</h1>
            <div className="button-container">
                <button onClick={setEditMode} className="button-edit">Edit</button>
                <button onClick={deleteThing} className="button-delete">Delete</button>
            </div>
    </div>   }
    {editMode && 
    
    <div>
        <input
        name="title"
        onChange={handleChange}
        placeholder={title}
        value={newInput.title}
        />
        <img src={imgUrl} alt=""></img>
        <input
        name="description"
        onChange={handleChange}
        placeholder={description}
        value={newInput.description}
        />
        <button onClick={editThing}>Save</button>
    </div>}
    </>
  )
}
