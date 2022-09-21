import {useState} from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)


  return (
    <div className="App">
    <p>
      {counter}
    </p>
    <button onClick={() => {
      setCounter(counter + 1);
      }}>add count</button>
    <button onClick={() => {
    setCounter(counter - 1);
  }}> sub count</button>

    </div>
    
  );
}

export default App;
