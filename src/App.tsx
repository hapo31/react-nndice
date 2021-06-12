import React from 'react';
import Dice from './components/Dice';

function App() {
  return (
    <h1>
      Welcome to NK○DICE
      <div style={{display: "flex"}}>
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
      </div>
    </h1>
  );
}

export default App;
