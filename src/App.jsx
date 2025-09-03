import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import albumCover from './assets/default_album_cover.jpg'


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
      <div className="main">
        <div className="main_header">
          <div className="img">
            <img src={albumCover} alt="Album Cover" />
          </div>
          <section className="details">
            <div>
              <p>good kid, m.A.A.d city (Deluxe)</p>
              <p className="sm-hide">Kendrick Lamar</p>
              <p className="sm-hide">2012 . 1 hr 32 min . 17 songs</p>
            </div>
            <div>
              <i className="fa fa-play"> &nbsp;Play all</i>
              <i className="fa fa-plus"> &nbsp;Add to</i>
              <i className="fa fa-ellipsis-h">&nbsp;&nbsp;More</i>
            </div>
          </section>
        </div>
        <div className="main_body"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App
