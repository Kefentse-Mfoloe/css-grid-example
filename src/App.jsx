import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div id="grid-container">
      <div className="aside">
        <i className="fa fa-bars"></i>
        <i className="fa fa-home"></i>
        <i className="fa fa-search"></i>
        <i className="fa fa-volume-up"></i>
        <i className="fa fa-user"></i>
        <i className="fa fa-spotify"></i>
        <i className="fa fa-facebook-f"></i>
        <i className="fa fa-cog"></i>
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App
