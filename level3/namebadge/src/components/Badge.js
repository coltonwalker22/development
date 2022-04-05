import React from 'react';


export default function Badge({firstName, lastName, email, placeOfBirth, phone, favoriteFood, bio}){

    return(
    <div className="badge-container">
        <div className="badge-firstName">{`First Name: ${firstName}`}</div>
        <div className="badge-lastName">{`Last Name: ${lastName}`}</div>
        <div className="badge-email">{`email: ${email}`}</div>
        <div className="badge-placeOfBirth">{`Place of Birth: ${placeOfBirth}`}</div>
        <div className="badge-phone">{`Phone: ${phone}`}</div>
        <div className="badge-favoriteFood">{`Favorite Food: ${favoriteFood}`}</div>
        <div className="break"></div>
        <div className="break"></div>
        <div className="badge-bio">{`Bio: ${bio}`}</div>
    </div>
)
}