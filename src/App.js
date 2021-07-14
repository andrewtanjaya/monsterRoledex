
import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      "monsters" : [
        {
          name : "Frankenstein",
          id : 1
        },
        {
          name : "Dracula",
          id : 2
        },
        {
          name : "Mummy",
          id : 3
        },
      ]
    }
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map( monster =>
            <h1 key={monster.id}>{monster.name}</h1>
          )
        }
      </div>
    );
  }
}

export default App;
