import React,  { Component } from 'react';
import CardList from './CardList';
import { Cardsinfo } from './Cardsinfo';
import Searchbox from './Searchbox';


class App extends Component {
  constructor(){
    super()
    this.state = {
      Cardsinfo: Cardsinfo,
      searchfield: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }
  render(){
    const catfilter = this.state.Cardsinfo.filter(card => {
      return card.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
      return (
     <React.StrictMode>
        <div className="tc">
        <h1> KittyKit </h1>  
        <Searchbox  searchChange ={this.onSearchChange} />
        <CardList  Cardsinfo={catfilter}  />
        </div>

    </React.StrictMode>
  );
  }
  
}

export default App;
