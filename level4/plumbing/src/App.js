import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services'
import ErrorPage from './Pages/ErrorPage'
import Navbar from './components/Navbar'


import './styling/App.css';
import './styling/header.css'
import './styling/footer.css'
import './styling/services.css'
import './styling/home.css'
import './styling/about.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
