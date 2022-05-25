import React from 'react';
import Header from './components/Header'
import Vacationcardbody from './components/Vacationcardbody'
import Footer from './components/Footer'

import './styling/header.css'
import './styling/vacationcardbody.css'
import './styling/vacationcard.css'
import './styling/footer.css'
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Vacationcardbody />
      <Footer />
    </div>
  );
}

export default App;
