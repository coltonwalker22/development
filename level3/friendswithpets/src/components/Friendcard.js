import React from 'react';
import Pet from './Pet'




export default function Friendcard(props){
const {name, age, pets} = props
    const petslists = pets.map( (pet, i)=>{
    return(<Pet 
        key={i}
        {...pet}
    />)
    })

    return(
        <div className="friend-card">
            <h1 className="name">Name: {name}</h1>
            <h1 className="age">Age: {age}</h1>
            <h1 className="pets-title">Pets:</h1><div className="pets-list"><h1 className="pets-name">{petslists}</h1></div>
        </div>
    )
}