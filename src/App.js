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
    axios.get(`https://feedi.me/search/entries?q=${query}`)
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
          <div className="jumbotron  jumbotron-fluid">
          <button type="button" className="btn btn-secondary">
            Query <span className="badge badge-light">{this.state.query}</span>
          </button>
          <button type="button" className="btn btn-secondary">
            Entries <span className="badge badge-light">{this.state.entries.length}</span>
          </button>
          </div>
       
          {
            (this.state.loading)
             ? <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
             : <div><EntryList data={this.state.entries} query={this.state.query}/></div>
          }          
        </div>
      </div>
    );
  }
}
