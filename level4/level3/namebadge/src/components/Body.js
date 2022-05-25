import React, {useState} from 'react';
import Badge from './Badge'
import {v4 as uuidv4} from 'uuid';

export default function Body(){

    

    const [formData, setFormData] = useState([])

    const [newEntry, setNewEntry] = useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        bio: ""
    })
    
    function handleChange(event){
        const {name, value} = event.target
    setNewEntry(prevEntry => ( {...prevEntry, [name] : value}))
}

    function handleSubmit(event) {
        event.preventDefault();
        setFormData(prevFormData =>( [...prevFormData, newEntry]))
        setNewEntry({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            bio: ""
        })
    }


   function disabledButton(){ 
  if(newEntry.bio  === "" 
  || newEntry.firstName === "" 
  || newEntry.lastName === ""
  || newEntry.email === ""
  || newEntry.phone === ""
  || newEntry.favoriteFood === ""
  ){
// (newEntry.bio && newEntry.firstName === "") ? <button>submit</button> : <button disabled={true}>submit</button>
    return <button disabled={true}>Submit</button>
} else{
    return <button >Submit</button>
  }
   }

  const badgeItem =  formData.map((item) => <Badge {...item} key={uuidv4()}/>)

    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>

                <input 
                minLength="3"
                type="text"
                placeholder="First name"
                className="form-firstName"
                name="firstName"
                onChange={handleChange}
                value={newEntry.firstName}
                />
                <input 
                    minLength="3"
                    type="text"
                    placeholder="Last name"
                    className="form-lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={newEntry.lastName}/>
                <input
                    minLength="3"
                    type="email"
                    placeholder="Email"
                    className="form-email"
                    name="email"
                    onChange={handleChange}
                    value={newEntry.email} />
                <input 
                    minLength="3"
                    type="text"
                    placeholder="Place of Birth"
                    className="form-placeOfBirth"
                    name="placeOfBirth"
                    onChange={handleChange}
                    value={newEntry.placeOfBirth} />    
                <input
                    minLength="3"
                    type="number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone"
                    className="form-phone"
                    name="phone"
                    onChange={handleChange}
                    value={newEntry.phone}
                  />
                <input 
                    minLength="3"
                    type="text"
                    placeholder="Favorite Food"
                    className="form-favoirteFood"
                    name="favoriteFood"
                    onChange={handleChange}
                    value={newEntry.favoriteFood}
                  />
            <div className="break"></div>
                <textarea
                    minLength="3"
                    type="text"
                    placeholder="tell us about yourself"
                    className="form-bio"
                    onChange={handleChange}
                    value={newEntry.bio}
                    name="bio"
                />
                <div className="break"></div>
                {disabledButton()}          
 
            </form>
            {/* <Badge key={uuidv4()} data={formData.map}/>      */}
            {badgeItem}
        </div>
    )
}