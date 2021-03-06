import Canvas from './components/Canvas/Canvas.js'
import {useState, useEffect} from 'react'
const {Model} = require('./model/Model.js');

function App() {
  const [model] = useState(new Model(600, 600, 12));
  const [config] = useState({
    colorMap: new Map([
      ['0', [255, 255, 255]],
      ['A', [255, 0, 0]],
      ['B', [0, 255, 0]],
      ['C', [0, 0, 255]]
    ]),
    selectedTeam: 'A'
  });

  const selectTeam = (team) => {
    config.selectedTeam = team;
  }

  const clear = () => {
    model.clear();
  }

  return (
    <div className="App">
      <h1>Color Fight</h1>
      <div className="center">
        <Canvas model={model} config={config}/>
      </div>
      <div className="center">
        <button onClick={() => selectTeam('A')}>A</button>
        <button onClick={() => selectTeam('B')}>B</button>
        <button onClick={() => selectTeam('C')}>C</button>
        <button className='eraseBtn' onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
