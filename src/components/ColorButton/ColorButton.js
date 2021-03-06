import './ColorButton.css'

const ColorButton = ({selected, number, color, func}) => {
    return (
        <button className={'colorBtn' + (selected ? ' colorBtn-select' : '')} onMouseDown={() => func(number)}>
            <label>{`${number}`}</label>
            <div className='color-sticker' style={{backgroundColor: color}}></div>
        </button>
    )
}

export default ColorButton
