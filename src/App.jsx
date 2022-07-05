import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Welcome to WavePortal
        </div>
      <div className="Country" >
        <div className="text">
          India
          </div>
      </div>
        <div className="bio">
        I am Dhanushdhaari XP I work on so cool stuff right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
