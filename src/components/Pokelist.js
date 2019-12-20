import React from 'react';



class Pokelist extends React.Component {
    render(){
    return <ul className = "pokemon__list">{this.props.children}</ul>;
    }
}

export default Pokelist;