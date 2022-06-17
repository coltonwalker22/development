import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserProvider2 from './context/UserProvider2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider2>
      <App />
    </UserProvider2>
);

