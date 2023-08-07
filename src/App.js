import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <div className="App">
      <Routes>        
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
