import React, {useRef, useEffect} from 'react'
import './RuleSelectUI.css'
import RuleCard from '../RuleCard/RuleCard.js'
import rules from '../../data/rules.json'

const RuleSelectUI = ({showing, closeFunc, selectFunc, model}) => {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus();
    })

    const keyDown = (e) => {
        if(e.key === "Escape")
            closeFunc();
    }
    
    return (
        <div ref={ref} tabIndex={0} className={`rule-select-ui ${showing ? '' : 'hiding'}`} onMouseDown={()=>closeFunc()} onKeyDown={keyDown}>
            <div className='rule-select-ui-content' onMouseDown={(e) => {e.stopPropagation()}}>
                <div className='rule-select-ui-header'>
                    <span>Select Rule</span>
                </div>
                <div className='rule-select-ui-body'>
                    {
                        rules.map((rule, index) => {
                            return <RuleCard highlight={rule === model.rule} key={index} rule={rule} func={()=>selectFunc(rule)} />
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default RuleSelectUI
