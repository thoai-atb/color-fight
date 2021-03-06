import './ColorButton.css'
import ColorSticker from '../ColorSticker/ColorSticker.js'

const ColorButton = ({selected, label, team, func}) => {
    return (
        <button className={'colorBtn' + (selected ? ' colorBtn-select' : '')} onMouseDown={() => func(team)}>
            <label>{`${label}`}</label>
            <ColorSticker team={team}/>
        </button>
    )
}

export default ColorButton
