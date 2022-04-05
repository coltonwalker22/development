import React from 'react';
import Header from './components/Header'
import Meme from './components/Meme'

import './App.css';
import './styling/header.css'
import './styling/meme.css'
import './styling/savedmeme.css'

function App() {
  return (
    <div className="App">
    <Header />
    <Meme />
    </div>
  );
}

export default App;
