import React from 'react';
import Home from './Components/Home';
import Marvel from './Components/Marvel'
import './Components/style.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
      <Routes>
         <Route path="/" element={<Home /> } />
         <Route path="/:id" element={<Marvel /> } />
      </Routes>
    </>
  )
}

export default App
