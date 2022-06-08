

import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Projects  from './components/Projects/project.js';
import Contact from './components/Contact/Contact.js'

import './App.css';
import './components/Header/header.css'
import './components/About/about.css'
import './components/Projects/projects.css'
import './components/Contact/contact.css'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
