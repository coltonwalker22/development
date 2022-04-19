import React, {useState, useEffect} from 'react';



export default function Generator(){
    const [colorData, setColorData] = useState('')
        
     const [count, setCount] = useState(0)


//geneterates a random number between 0 and 7 for the 7 colors.
const randomNum = Math.floor(Math.random() * 8)

//the useEffect grabs the API of the random 7 colors.
// accessing the data => then colors => random number => the hex# of the color.
    useEffect(() =>{
        console.log("effect ran")
        fetch(`https://www.colr.org/json/colors/random/7`)
                .then(res => res.json())
                .then(data => setColorData(data.colors[randomNum].hex));
    }, [count])

// setting the style to be an object of just background color to a string hex value
let style = {
    backgroundColor: `#${colorData}`
}

function toggleColor(){ 
    setCount(prevCount => prevCount + 1)
}

    return(
        <div className="body">
            <div style={style} className="color-generator"></div>
        <button onClick={toggleColor}> get next color</button>
        </div>
    )
}