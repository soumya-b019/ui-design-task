import React from "react";
import { Hero, Navbar, Team, Vision, CTA, Footer } from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <div className='gradient__bg'>
        <Team/>
      </div>
      <Vision/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
