import React from 'react';
import './App.css';

function App(props) {
  
  const [color, setColor] = useState("blue")
  
  
console.log("component has re-rendered")

const changeColor = () => {
  
  // 1. change state by passing in a new state value
  // setColor("pink")

  // 2. change state by passing in a cb function that will
  // if(color === "pink")
  //     setColor("blue")
  // else
  //   setColor("pink")
    setColor(function(prevColor){
      if(prevColor==="pink")
          return "blue"
      else  
          return "pink"
  })
}


  return (
    <div className="App">
    <div style={{border: '1px solid black', width:"500px", height:"500px", backgroundColor: color[0]}}>
      <h2>The current background color is {state[0]}</h2>

      <button onClick={changeColor}>Change Color</button>

      </div>
    </div>
  );
}

export default App;
