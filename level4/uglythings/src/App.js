import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List';

import {FormContextProvider} from './formContextProvider'


import './styling/form.css';
import './styling/list.css'
import './App.css';

function App() {
  return (
    <div className="App">
    <FormContextProvider>
    <Header />
    <Form />
    <List />
    </FormContextProvider>
    </div>
  );
}

export default App;
