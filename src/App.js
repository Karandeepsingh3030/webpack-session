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
          <img src={Profile} />
        </div>
        <div className="right-container">
          <h2>Karandeep Singh</h2>
          <h4>Fullstack Developer | Engineer | Music Producer</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
