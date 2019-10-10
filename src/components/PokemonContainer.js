import React from 'react'
import '../css/cell.css'

const PokemonContainer = ({name}) => {
    return (
        <div className='cell'>
            <p>{name}</p>
        </div>
    )
}

export default PokemonContainer;
