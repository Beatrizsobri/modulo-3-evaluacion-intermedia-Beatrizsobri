import React from 'react';
import Pokemontypes from './Pokemontypes';

function Pokemon (props) {
    let types = props.types
    return(
    <div>
        <img alt={props.name} src={props.src}/>
        <h2>{props.name}</h2>
        <ul>
        {types.map((type,key)=>{
            return <Pokemontypes types={type} key={key}/>
        })}
        </ul>
    </div>

    )
}


export default Pokemon;