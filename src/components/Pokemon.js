import React from 'react';
import Pokemontypes from './Pokemontypes';
import PropTypes from 'prop-types';


function Pokemon(props) {
    let { types, name, src } = props
    return (
        <li className="pokemon__box" >
            <img className="pokemon__box--image" alt={name} src={src} />
            <h2 className="pokemon__box--title">{name}</h2>
            <ul className="pokemon__box--type">
                {types.map((type, key) => {
                    return <Pokemontypes types={type} key={key} />
                })}
            </ul>
        </li>

    )
}
Pokemon.propTypes = {
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}


export default Pokemon;