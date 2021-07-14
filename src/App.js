
import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component'

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
        <SearchBox placeholder="Search Monster" handleChange = {e => this.setState({searchValue : e.target.value})}></SearchBox>
        <CardList monsters={filteredMonsters}/>        
      </div>
    );
  }
}

export default App;
