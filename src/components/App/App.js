import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Business from '../Business/Business';

export default class App extends Component {
  searchYelp(term, location, sortBy){
    console.log(`Searching Yelp\nwith ${term},\n${location},\n${sortBy}`);
  }
  render(){
    const businessArray = [];
    for(let i=0;i<6;i++){
      businessArray.push(<Business />);
    }

    return (
      <div class="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList business={businessArray}/>
      </div>
    );
  }
}

