import React, {useContext, useState} from 'react';
import {FormContext} from '../formContextProvider'

export default function Form(){

    
    const { postUglyThing} = useContext(FormContext)

    const [thing, setThing] = useState({
        title:"",
        description:"",
        imgUrl: ""
    })
    console.log(thing)
    // function updateThingList(){
        
    // }

    // get value from inputs

    function handleChange(event) {
        const {name, value} = event.target
        setThing(prevThing => ({...prevThing, [name]: value}))
    }

    // submit the form
    function handleSubmit(event) {
        event.preventDefault()
        postUglyThing(thing)
        setThing({
            title: "",
            description: "",
            imgUrl: ""
        })

    }
    

    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-inputs">
                <input 
                    type="text" 
                    className="form-title"
                    placeholder="Title"
                    name="title"
                    value={thing.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form-description"
                    placeholder="description"
                    name="description"
                    value={thing.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form-imgUrl"
                    placeholder="Image URL"
                    name="imgUrl"
                    value={thing.imgUrl}
                    onChange={handleChange}
                />
            </div>
            <div className="form-button-container">
            <button>Submit</button>
            </div>
        </form>
    )
}