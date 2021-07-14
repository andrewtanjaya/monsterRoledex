
import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super()
    this.state = {
      "monsters" : [],
      "searchValue" : ""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log(response.json()
    .then(users =>this.setState({monsters : users}))))
  }


  render(){
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    return (
      <div className="App">
        <input type="search" onChange={(e)=>this.setState({searchValue : e.target.value})} placeholder="Search Monster"/>
        <CardList monsters={filteredMonsters}/>        
      </div>
    );
  }
}

export default App;
