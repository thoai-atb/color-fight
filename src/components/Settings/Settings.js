import React, {useState} from 'react'
import './Settings.css'
import {ReactComponent as SettingsIcon} from '../../images/settings.svg';

const Settings = () => {
    const [showSettings, setShowSettings] = useState(false);
    return (
        <button className={'settings-btn' + (showSettings ? ' show' : '')} onMouseDown={() => setShowSettings(!showSettings)}>
          <div className='header'>
            <SettingsIcon width="20" height="20"/>
          </div>
          {
            showSettings && 
            <div className='body' onMouseDown={e => e.stopPropagation()}>
              Future Implementation
            </div>
          }
        </button>
    )
}

export default Settings
