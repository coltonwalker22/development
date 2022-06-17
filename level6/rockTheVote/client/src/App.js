import React, {useContext} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {UserContext} from './context/UserProvider2.js'
import ProtectedRoute from './components/ProtectedRoute.js'

import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Public from './pages/Public'

import Navbar from './components/Navbar'

import './App.css';
import './styling/navbar.css'
import './styling/authform.css'
import './styling/profile.css'
import './styling/issue2.css'
import './styling/publicissue.css'

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <Router>
      { token && <Navbar logout={logout} /> }
      <Routes>
        <Route 
        path="/" 
        element={ token ? <Navigate to="/profile"/> : <Auth />}/>
        <Route 
        path="/profile" 
        element={
          <ProtectedRoute token={token} redirectTo="/">
            <Profile />
          </ProtectedRoute>
          } 
        />
        <Route 
        path="/public"
         element={
         <ProtectedRoute token={token} redirectTo="/">
         <Public />
         </ProtectedRoute>
          } 
         />
      </Routes>
    </Router>

  );
}

export default App;
