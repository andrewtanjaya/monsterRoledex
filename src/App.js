import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super()
    this.state = {
      "name" : "Andrew"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name}
          </p>
          <button onClick={()=>this.setState({"name" : "Hi Andrew"})}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
