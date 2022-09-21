import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {ThemeContextProvider} from './themeContext'


import './styling/header.css';
import './styling/body.css';
import './styling/footer.css';
import './styling/App.css';

function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
    <Header />
    <Body />
    <Footer />
    </ThemeContextProvider> 
    </div>
  );
}

export default App;
