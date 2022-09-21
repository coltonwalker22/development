import Form from "Form.js"
import './App.css';

import { useState } from "react";

function App() {
  const [list, setList] = useState(["Jane", "John"]);

  function handleAdd(item){
    setList(prevList => [...prevList, item] )
  }

  function deleteItem(index, item){
    // const updatedItem = prevList.filter(items => items.index !== index)
    console.log("deleteItem function was called")
    setList(prevList => { console.log("setlist was called")
      return prevList.filter((currentName,idx )=> idx !== index)
    })
  }

  return (
    <div className="App">
      <h2>Add New Item</h2>
      <Form handleAdd={handleAdd} />
      <h1>Items</h1>
      {list.map((item, index) => 
      <div key={index}> 
      <h2 >{item}</h2>
      <button onClick={() => deleteItem(index)}>delete</button>
      </div>)}
    </div>
  );
}

export default App;