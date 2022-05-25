import React from 'react';

export default function Vacationcard({place, price, timeToGo, img}){
    let cost
if( price < 500){
     cost = "$ "
} else if (price > 500 && price < 1000){
    cost = "$$ "
} else if (price > 1000){
    cost = "$$$ "
}

return(
    <div className="vacationcard-container">
        <img className="vacationcard--image"src={img}></img>
        <h1 className="vacationcard--place">{place}</h1>
        <h2 className="vacationcard--price">{cost}{price}</h2>
        <h3 className="vacationcard--timetogo">Timetogo? {timeToGo}!</h3>
        <div className="button-container">
            <button className="button-book">BOOK NOW</button>
        </div>
        <div className="vacationcard-info"></div>
    </div>
)

}

// Give each card 1, 2, or 3 dollar signs ($) depending 
// on if it's less than $500, less than $1000, or more than $1000