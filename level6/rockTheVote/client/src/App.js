import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/public" element={<Public />} />
      </Routes>
    </Router>

  );
}

export default App;
