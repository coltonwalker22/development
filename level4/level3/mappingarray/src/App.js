import React, {useState} from 'react';
import './App.css';

function App() {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
  function addItem() {
     setThingsArray(prevThingsArray => { return [...prevThingsArray, `thing ${prevThingsArray.length + 1}`]
    })
  }
  
  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)


  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
 
 
}

export default App;
