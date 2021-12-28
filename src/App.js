import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const salute = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        🖖 Live long and prosper!
        </div>

        <div className="bio">
        Maggot! Connect your Ethereum wallet and salute at me!
        </div>

        <button className="saluteButton" onClick={salute}>
          Salute at Me, mofo!
        </button>
      </div>
    </div>
  );
}
