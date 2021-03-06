import React from 'react'
import './ColorSticker.css'
import colorlist from '../../data/colorlist.json'

const ColorSticker = ({team}) => {
    const ar = colorlist[team];
    const color = `rgb(${ar[0]}, ${ar[1]}, ${ar[2]})`;
    return (
        <div className='color-sticker' style={{backgroundColor: color}}></div>
    )
}

export default ColorSticker
