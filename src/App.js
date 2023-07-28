import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import Mainpage from './components/Homepage';
import HowWeHelpYou from './components/HowWeHelpYou';
import PDE from './components/PDE';
import Footer from './components/Footer';

function App() {
  return (
    <div> 
      <Navbar />
    
      <Mainpage />
      <WhatWeDo />
      <HowWeHelpYou />
      <PDE />
      <Footer />
    </div>
  )
}

export default App;
