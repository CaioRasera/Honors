import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import Mainpage from './components/Homepage';

function App() {
  return (
    <div> 
      <Navbar />
      <Mainpage />
      <WhatWeDo />
    </div>
  )
}

export default App;
