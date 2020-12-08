import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Boon } from './boon';
import { BoonType } from './models/boon'

const boons: {[key:string]:BoonType} = require('./data/boons.json');
const boonkeys = Object.keys(boons);


function App() {
  return (
  <div>
   {boonkeys.map( (boonname:string) => (
    <Boon key={boonname} boon={boons[boonname]}/>
  ))}
  </div>
  )
}
export default App;
