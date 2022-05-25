import React, {useState} from 'react'
import Header from './components/Header'
import Dicebox from './components/Dicebox'



import './App.css';
import './styling/header.css'
import './styling/dicebox.css'

function App() {



  return (
    <div className="App">
      <Header />
      <Dicebox/>
      
    </div>
  );
}

export default App;
