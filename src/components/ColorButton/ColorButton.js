import './ColorButton.css'
import colorMap from '../../data/colorMap.json'

const ColorButton = ({selected, label, team, func}) => {
    const ar = colorMap[team + ''];
    const color = `rgb(${ar[0]}, ${ar[1]}, ${ar[2]})`;
    return (
        <button className={'colorBtn' + (selected ? ' colorBtn-select' : '')} onMouseDown={() => func(team + '')}>
            <label>{`${label}`}</label>
            <div className='color-sticker' style={{backgroundColor: color}}></div>
        </button>
    )
}

export default ColorButton
