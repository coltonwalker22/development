import React from 'react';
import './App.css';
import Header from './cmoponents/Header'
import Body from './cmoponents/Body'


function App() {

  const [user, setUser] = React.useState("Colton")

  return (
    <main>
    <Header user={user} />
    <Body user={user} />
</main>
  );
}

export default App;
