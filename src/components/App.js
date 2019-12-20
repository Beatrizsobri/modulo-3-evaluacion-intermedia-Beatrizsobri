import React from 'react';
import '../stylesheet/App.scss';
import Pokelist from './Pokelist';
import Pokemon from './Pokemon'
import ApiData from '../data/Api'

function App() {
  return (
    <div className="App">
      <h1>Mi lista de Pokemon</h1>
      <Pokelist>
        {ApiData.map(Api=>{
          return (
            <Pokemon 
            key={Api.id}
            name={Api.name} 
            src={Api.url} 
            types={Api.types}/>
          )
        }
        )
        }
      </Pokelist>
    </div>
  );
}

export default App;
