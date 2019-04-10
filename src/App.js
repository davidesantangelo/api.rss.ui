import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import RepoList from './Components/RepoList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      repos: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'a') => {
    axios.get(`http://116.203.148.86/search/entries?q=${query}`, { headers: {"Authorization" : 'Token A7lKL3OyLYcJkhkVPK8ZnpHuCHs5ymrN8K9TmC6xifjU-a0l9BK_bMOrkWvXgKDih8_m-iVRw70P545TPsMD3g'} })
      .then(response => {
        this.setState({
          query: query,
          repos: response.data.data,
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
            <h1 className="main-title">Feedi</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>Loading...</p>
             : <div><h2>{this.state.query}</h2><RepoList data={this.state.repos} /></div>
          }          
        </div>
      </div>
    );
  }
}
