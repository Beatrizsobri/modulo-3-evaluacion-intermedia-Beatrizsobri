import React from 'react';
import ApiData from '../data/Api';
import Pokemontypes from './Pokemontypes'




class Pokemon extends React.Component {
    render(){
    return (
    <div>
        <img alt={this.props.name} src={this.props.src}/>
        <h2>{this.props.name}</h2>
    <ul>
        {/* {ApiData.map((Api,key)=>{})} */}
        <Pokemontypes types={ApiData[0].types}/>
    </ul>
</div>

    );
    }
}

export default Pokemon;