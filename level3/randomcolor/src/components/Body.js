import React, {useState, useEffect} from 'react';



export default function Generator(){
    const [colorData, setColorData] = useState('')
        
     const [count, setCount] = useState(0)

const randomNum = Math.floor(Math.random() * 8)

    useEffect(() =>{
        console.log("effect ran")
        fetch(`https://www.colr.org/json/colors/random/7`)
                .then(res => res.json())
                .then(data => setColorData(data.colors[randomNum].hex));
    }, [count])

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