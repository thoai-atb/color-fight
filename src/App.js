import Canvas from './components/Canvas/Canvas.js'
import ColorButton from './components/ColorButton/ColorButton.js'
import React, {useState, useEffect} from 'react'
const {Model} = require('./model/Model.js');
const model = new Model(600, 600, 12);
const colorMap = new Map([
  ['0', [255, 255, 255]],
  ['1', [255, 0, 0]],
  ['2', [0, 255, 0]],
  ['3', [0, 0, 255]]
]);

const App = () => {
  const [selectedTeam, setSelectedTeam] = useState('1');

  useEffect(() => {
    const keyDown = (e) => {
      if(e.key > '0' && e.key <= '9')
        selectTeam(e.key);
    }
    document.addEventListener('keydown', keyDown);
  }, []);


  const selectTeam = (team) => {
    if(colorMap.has(team)) {
      setSelectedTeam(team);
    }
  }

  const clear = () => {
    model.clear();  
  }

  return (
    <div className="App" >
      <h1>Color Fight</h1>
      <div className="center">
        <Canvas model={model} colorMap={colorMap} selectedTeam={selectedTeam}/>
      </div>
      <div className="center">
        <ColorButton selected={selectedTeam === '1'} number={'1'} color={'red'} func={selectTeam} />
        <ColorButton selected={selectedTeam === '2'} number={'2'} color={'green'} func={selectTeam} /> 
        <ColorButton selected={selectedTeam === '3'} number={'3'} color={'blue'} func={selectTeam} />
        <button className='eraseBtn' onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

export default App;
