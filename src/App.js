import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Gallery from './pages/gallery'
import {GALLERY_DATA} from './data/default-data'

function App() {
  return (
    <div className="App">
		{/* <Dashboard /> */}
		{/* <Login /> */}
      <Routes>        
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard/*' element={<Dashboard />} /> 
      </Routes>
    </div>
  );
}

export default App;
