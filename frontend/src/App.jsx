import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

//Navigation
import {Routes, Route, Link} from 'react-router-dom'

function App(){
  return(
    <div>

      <nav>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>

        
      </nav>
      

      <Routes>


        <Route path="/" element={<Home/>} />
        
        <Route path="/about" element={<About/>}/>

        <Route path="/services" element={<Services/>}/>

        <Route path="/contact" element={<Contact/>}/>




      </Routes>
    </div>
  );





}

export default App;