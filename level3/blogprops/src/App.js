import React from 'react';
import Header from './components/Header'
import Bloglist from './components/Bloglist'
import Footer from './components/Footer'

import './App.css';
import './styling/header.css';
import './styling/blogpostlist.css'
import './styling/blogpost.css'
import './styling/footer.css'


function App() {

 

  return (
    <div className="App">
    <Header />
    <Bloglist />
    <Footer />
   
    </div>
   
  );
}

export default App;
