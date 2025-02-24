import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;