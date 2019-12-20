import React from 'react';


class Pokemontypes extends React.Component {
    render(){
    return <li className="pokemon__box--type--each">{this.props.types}</li>;
    }
}

export default Pokemontypes;