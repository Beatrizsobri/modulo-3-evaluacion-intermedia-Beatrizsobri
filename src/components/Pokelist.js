import React from 'react';



class Pokelist extends React.Component {
    render(){
    return <ul>{this.props.children}</ul>;
    }
}

export default Pokelist;