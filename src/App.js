import Canvas from './components/Canvas/Canvas.js'
import ColorButton from './components/ColorButton/ColorButton.js'
import React, {useState, useEffect} from 'react'
import rules from './data/rules.json'
import ColorSticker from './components/ColorSticker/ColorSticker.js'
const {Model} = require('./model/Model.js')
const model = new Model(800, 500, 12, rules[4])

const App = () => {
  const [selectedTeam, setSelectedTeam] = useState(model.rule.teams[0]);

  useEffect(() => {
    const keyDown = (e) => {
      if(e.key > '0' && e.key <= '9')
        selectTeam(model.rule.teams[parseInt(e.key) - 1]);
    }
    document.addEventListener('keydown', keyDown);
  }, []);


  const selectTeam = (team) => {
    if(model.rule.teams.indexOf(team) !== -1) {
      setSelectedTeam(team);
    }
  }

  const clear = () => {
    model.clear();  
  }

  return (
    <div className="App" >
      <h1>Color Fight</h1>
      <div>
        <Canvas model={model} selectedTeam={selectedTeam}/>
      </div>
      <div>
        {
          model.rule.teams.map((teamID, index) => {
            return <ColorButton key={index} label={index + 1} selected={selectedTeam === teamID} team={teamID} func={selectTeam} />
          })
        }
        <button className='eraseBtn' onClick={clear}>Clear</button>
      </div>
      <div>
        <h2>Rule:</h2>
        <button className='rule-card'>
          {
            model.rule.pairs.map((pair, i) => {
              return <div key={i} className='rule-pair'><ColorSticker team={pair[0]}/> &gt; <ColorSticker team={pair[1]}/></div>
            })
          }
        </button>
      </div>
    </div>
  );
};

export default App;
