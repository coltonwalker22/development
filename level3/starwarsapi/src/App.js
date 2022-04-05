import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const randomNum = Math.floor(Math.random() * 84)

    const [peopleData, setPeopleData] = useState('')
    const [count, setCount] = useState(1)
   
console.log(`https://swapi.dev/api/people/17`)

useEffect(() => {
  console.log("effect ran");
  fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setPeopleData(data))

}, [count])


function toggleName(){
  setCount(randomNum)
}

  return (
    <div className="App">
      <div className="name-generator"></div>
      <button onClick={toggleName}> get next name</button>
      <pre className="starwars-name">Name:{JSON.stringify(peopleData.name, null, 2)}</pre>
    </div>
  );
}

export default App;
