import React from 'react';
import Header from './components/Header'
import FriendList from './components/FriendList'

import './styling/friendlist.css';
import './styling/friendcard.css'
import './styling/header.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FriendList />
    </div>
  );
}

export default App;
