import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import albumCover from './assets/default_album_cover.jpg'
import Sidebar from './components/sidebar'
import Main from './components/main_components/main'

function App() {
  return (
    <div id="grid-container">
      <Sidebar />
      <Main />
      <div className="footer"></div>
    </div>
  );
}

export default App
