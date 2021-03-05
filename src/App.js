import Canvas from './components/Canvas/Canvas.js'
import {useState, useEffect} from 'react'
const {Model} = require('./model/Model.js');
const colorMap = new Map([
    ['0', [255, 255, 255]],
    ['A', [255, 0, 0]],
    ['B', [0, 255, 0]],
    ['C', [0, 0, 255]]
]);

function App() {
  const [model] = useState(new Model(400, 300, 9));

  return (
    <div className="App">
      <Canvas model={model} colorMap={colorMap}/>
    </div>
  );
}

export default App;
