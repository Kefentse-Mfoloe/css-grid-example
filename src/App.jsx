import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import albumCover from './assets/default_album_cover.jpg'
import Sidebar from './components/sidebar'
import MainHeader from './components/maincontent/mainHeader'
import MainBody from './components/maincontent/mainBody'
import Main from './components/maincontent/main'

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
