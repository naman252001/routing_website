// src/App.js
import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" style={{textAlign:'center'}}>
        
        

<nav style={{backgroundColor: "lightgreen", color: "yellow", display: "flex", alignItems: "center", padding: "10px"}}>
  <img src='./img/NAMAN.jpg' width={100} alt='logo here' style={{ marginLeft: "400px"}}/>
  <h1  style={{padding: 20, marginLeft: 280}}>
    <i className='Jithin'>
      <Link to="/">Home</Link> &nbsp; &nbsp; 
    </i>
    <i className='Jithin'>
      <Link to="/about">About</Link> &nbsp; &nbsp; 
    </i>
    <i className='Jithin'>
      <Link to="/contact">Contact</Link>
    </i>
  </h1>
</nav>

        <div className='shivam' style={{margin:100, padding:100}}>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
