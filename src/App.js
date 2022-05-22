import React from "react";
import './app.scss'
import './app.css'
import Profile from './assets/images/profile.jpg'

function App() {
  return (<>
  <div className="container">
  <h1>WEBPACK SESSION</h1>
  <div className="card-container">
   <div className="left-container">
     <img src={Profile}  />
   </div>
   <div className="right-container">
     <h2>Karandeep Singh</h2>
     <h4>Fullstack Developer | Engineer | Music Producer</h4>
     <p></p>
   </div>
  </div>
  </div>
  </>
  );
}

export default App;
