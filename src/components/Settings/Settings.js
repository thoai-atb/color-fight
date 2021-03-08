import React, {useState} from 'react'
import './Settings.css'
import {ReactComponent as SettingsIcon} from '../../images/settings.svg';

const Settings = ({spread, setSpread, sprinkleAmount, setSprinkleAmount, setDefault}) => {
    const [showSettings, setShowSettings] = useState(false);
    return (
        <button className={'settings-btn' + (showSettings ? ' show' : '')} onClick={() => setShowSettings(!showSettings)} onKeyDown={e => e.stopPropagation()}>
          <div className='header'>
            <SettingsIcon width="20" height="20"/>
          </div>
          {
            showSettings && 
            <div className='body' onClick={e => e.stopPropagation()}>
              <div className='option'>
                <div className='cell'>
                  <label forname='spread'>Spread</label>
                </div>
                <div className='cell'>
                  <input type='number' id='spread' min='1' value={spread} onInput={(e) => {
                    setSpread(parseInt(e.target.value) || 1)
                  }}></input>
                </div>
              </div>
              <div className='option'>
                <div className='cell'>
                  <label forname='sprinkle-amount'>Sprinkle Amount</label>
                </div>
                <div className='cell'>
                  <input type='number' id='sprinkle-amount' min='1' value={sprinkleAmount} onInput={(e) => {
                    setSprinkleAmount(parseInt(e.target.value) || 1)
                  }}></input>
                </div>
              </div>
              <div className='option'>
                <div className='cell'>
                  <div className='default-btn' onClick={setDefault}>Default</div>
                </div>
              </div>
            </div>
          }
        </button>
    )
}

export default Settings
