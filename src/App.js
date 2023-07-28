import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import Mainpage from './components/Homepage';
import HowWeHelpYou from './components/HowWeHelpYou';
import PDE from './components/PDE';

function App() {
  return (
    <div> 
      <Navbar />
      <Mainpage />
      <WhatWeDo />
      <HowWeHelpYou />
      <PDE />
    </div>
  )
}

export default App;
