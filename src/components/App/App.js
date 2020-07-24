import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Business from '../Business/Business';
import * as Yelp from '../../util/Yelp'


export default class App extends Component {
  constructor(){
    super();
    this.state = {businesses:[]};
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy){
    //console.log(`Searching Yelp\nwith ${term},\n${location},\n${sortBy}`);
    Yelp.search(term, location, sortBy).then((businesses) => {
      console.log(businesses);
      this.setState({businesses:businesses});
    })
    
  }
  render(){
    return (
      <div class="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

