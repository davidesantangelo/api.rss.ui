import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import EntryList from './Components/EntryList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      entries: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'ruby') => {
    axios.get(`https://feedi.me/search/entries?q=${query}`, { headers: {"Authorization" : 'Token A7lKL3OyLYcJkhkVPK8ZnpHuCHs5ymrN8K9TmC6xifjU-a0l9BK_bMOrkWvXgKDih8_m-iVRw70P545TPsMD3g'} })
      .then(response => {
        this.setState({
          query: query,
          entries: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <SearchForm onSearch={this.performSearch} query={this.state.query} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>Loading...</p>
             : <div><EntryList data={this.state.entries} query={this.state.query}/></div>
          }          
        </div>
      </div>
    );
  }
}
