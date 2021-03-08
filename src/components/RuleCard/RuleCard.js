import React from 'react'
import './RuleCard.css'
import ColorSticker from '../ColorSticker/ColorSticker.js'

const RuleCard = ({rule, func, highlight}) => {
    return (
        <button className={'rule-card' + (highlight ? ' rule-card-highlight' : '')} onMouseDown={func}>
          {
            rule.pairs.map((pair, i) => {
              return <div key={i} className='rule-pair'><ColorSticker team={pair[0]}/> &gt; <ColorSticker team={pair[1]}/></div>
            })
          }
        </button>
    )
}

export default RuleCard
