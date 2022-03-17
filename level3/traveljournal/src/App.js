import React from 'react';
import Header from './components/Header'
import Travelcard from './components/Travelcard'
import Data from './Data'
import './App.css';

import './styling/header.css'
import './styling/travelcard.css'

function App() {

    const travelcards = Data.map( (item, i) => 
      <Travelcard 
      key={i}
      {...item}
      />
    )
    console.log(travelcards)
    
  return (
    <div className="App">
     <Header />
     <section className="travelcard-list">
                  {travelcards}
      </section>
    </div>
  );
}
export default App;
