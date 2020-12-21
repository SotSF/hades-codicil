import React from 'react';
import './App.css';
import { Boon } from './boon';
import { BoonType } from './models/boon'

const boons: {[key:string]:BoonType} = require('./data/boons.json');
const boonkeys = Object.keys(boons);


function App() {
  
  return (
  <div className="App">
    <div className="build-area">
      <h1>This is the place for builds</h1>
      Imagine like, Heartbreak Strike here.
    </div>
    <div className="boon-area">
      <h1>Here you could pick out boons</h1>
      
    </div>
  </div>
  )
}
export default App;
