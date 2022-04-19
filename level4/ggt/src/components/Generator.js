import React, {useState} from 'react';

export default function Display(){

    // const [color1, setColor1] = useState("#000000")

    // const [color2, setColor2] = useState("#000000")

    // const [angle, setAngle] = useState(0)


    const [color, setColor] = useState({
        color1: "#000000",
        color2: "#000000",
        color3: "#000000",
        angle: 0
    })

    const [show, setShow] = useState(false)


    console.log("color:", color.color1)



    //  function handleColor1(event){
    //      setColor1(event.target.value);
        

    //  }

    //  function handleColor2(event){
    //     setColor2(event.target.value);

    // }

    function handleChange(event){
        const {name, value} = event.target
        setColor( prevColorData  =>{
            return({...prevColorData, [name]: value});
        })
    }


    return(
    <div className="container">
        <div className="display-area">
            <div className="display-color" style={{background:`linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2}, ${color.color3})`}}></div>
            <div className="display-text" readOnly value ="">
                {!show ? <input className="display-text-input" readOnly value ={`background: linear-gradient(${color.angle}deg, ${color.color1} , ${color.color2});`}></input> :  
                <input className="display-text-input" readOnly value ={`background: linear-gradient(${color.angle}deg, ${color.color1} , ${color.color2}, ${color.color3});`}></input>}
               

            </div>
        </div>

        <div className="options">
            <h1 className="options-title">Options</h1>

            <div className="color-one">
                <h1 className="color-text">Color 1:</h1>
                <h1 className="hex-color-display">{color.color1}</h1>
                <input
                name="color1"
                type="color" 
                className="color-preview"
                value={color.color1} 
                onChange={handleChange}
                />
            </div>

            <div className="color-two">
                <h1 className="color-text">Color 2:</h1>
                <h1 className="hex-color-display">{color.color2}</h1>
                <input
                name="color2"  
                type="color" 
                className="color-preview"
                value ={color.color2} 
                onChange={handleChange}
                />  
            </div>
            { show && <div className="color-three">
                <h1 className="color-text">Color 3:</h1>
                <h1 className="hex-color-display">{color.color3}</h1>
                <input
                name="color3"  
                type="color" 
                className="color-preview"
                value ={color.color3} 
                onChange={handleChange}
                />
            </div>}  
            <div className="angle">
            <h1>Angle:</h1>
            <input 
            name="angle"
            onChange={handleChange}
            value={color.angle}
            className="angle-input" 
            type="number" 
            min="0"
            max="360" 
            minLength="3"/>  
            <button onClick={() => setShow(true)}>+</button>
            </div>
          

        </div>
    </div>
    )
}