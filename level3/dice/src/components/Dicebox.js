import React, {useState} from 'react';

export default function Dicebox(){

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])



    function rollDice(){
    
    let collection = []
    collection.push(Math.floor(Math.random() * 7) + 1)
    collection.push(Math.floor(Math.random() * 7) + 1) 
    collection.push(Math.floor(Math.random() * 7) + 1)
    collection.push(Math.floor(Math.random() * 7) + 1)
    collection.push(Math.floor(Math.random() * 7) + 1)
    
    setNumbers(prevState => [...collection])
    console.log(collection)

    }
    console.log(numbers)


    return(
        <div>
        <div className="dicebox">
        <div className="dice">
            {numbers[0]}
        </div>
        <div className="dice">
            {numbers[1]}
        </div>
        <div className="dice">
            {numbers[2]}
        </div>
        <div className="dice">
            {numbers[3]}
        </div>
        <div className="dice">
            {numbers[4]}
        </div>
        </div>
        
            <dib onClick={rollDice} className="button-diceroll">ROLL!</dib>
        </div>
    )
}