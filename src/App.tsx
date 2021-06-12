import React, { useRef, useState } from 'react';
import Dice from './components/Dice';

function App() {

  const [roll, setRoll] = useState(false);
  const facesRef = useRef<string[]>(new Array(5).fill(""));

  return (
    <h1>
      Welcome to NK○DICE
      <p>

      <button onClick={() => setRoll(true)}>Roll</button>
      </p>
      <div style={{ display: "flex" }}>
        {facesRef.current.map((face, index) => (
          <Dice
            key={`Dice-${index}`}
            roll={roll}
            onStop={(face => {
              facesRef.current[index] = face;
              setRoll(false);
            })} />))
        }
      </div>
    </h1>
  );
}

export default App;
