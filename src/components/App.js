import React from 'react';
import '../stylesheet/App.scss';
import Pokelist from './Pokelist';
import Pokemon from './Pokemon'
import apiData from '../data/Api'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: apiData
    }
  }

  apiData() {
    this.setState({
      apiData: apiData
    })
  }


  render() {
    return (
      <div className="App pokemon">
        <h1 className="pokemon__name">Mi lista de Pokemon</h1>
        <Pokelist>
          {apiData.map(api => {
            return (
              <Pokemon
                name={api.name}
                src={api.url}
                types={api.types}
                key={api.id} />
            )
          }
          )
          }
        </Pokelist>
      </div>
    );
  }
}

export default App;
