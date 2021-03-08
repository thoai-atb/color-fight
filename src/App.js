import React, {useState, useEffect} from 'react'
import Canvas from './components/Canvas/Canvas.js'
import ColorButton from './components/ColorButton/ColorButton.js'
import RuleCard from './components/RuleCard/RuleCard.js'
import RuleSelectUI from './components/RuleSelectUI/RuleSelectUI.js'
import rules from './data/rules.json'
const {Model} = require('./model/Model.js')
const model = new Model(800, 500, 12, rules[0])

const App = () => {
  const [selectedTeam, setSelectedTeam] = useState(model.rule.teams[0]);
  const [showSelectRule, setShowSelectRule] = useState(false);

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

  const toggleRuleSelectUI = () => {
    setShowSelectRule(!showSelectRule);
  }

  const selectRule = (rule) => {
    model.rule = rule;
    setSelectedTeam(model.rule.teams[0]);
    model.clear();
    setShowSelectRule(false);
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
        <button className='eraseBtn' onClick={() => model.clear()}>Clear</button>
      </div>
      <div>
        <h2>Rule:</h2>
        <RuleCard rule={model.rule} func={toggleRuleSelectUI} />
      </div>
      <RuleSelectUI model={model} showing={showSelectRule} closeFunc={toggleRuleSelectUI} selectFunc={selectRule}/>
    </div>
  );
};

export default App;
