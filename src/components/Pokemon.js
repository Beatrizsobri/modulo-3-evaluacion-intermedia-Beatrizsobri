import React from 'react';
import Pokemontypes from './Pokemontypes';

function Pokemon (props) {
    let types = props.types
    return(
    <li className="pokemon__box">
        <img className="pokemon__box--image"alt={props.name} src={props.src}/>
        <h2 className="pokemon__box--title">{props.name}</h2>
        <ul className="pokemon__box--type">
        {types.map((type,key)=>{
            return <Pokemontypes types={type} key={key}/>
        })}
        </ul>
    </li>

    )
}


export default Pokemon;