import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import EntryList from './Components/EntryList';
import ReactPaginate from 'react-paginate';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      entries: [],
      loading: true,
      page: 1
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'ruby', page = null) => {

    axios.get(`https://feedi.me/search/entries?q=${query}&page=${page ? page : this.state.page}`)
      .then(response => {
        this.setState({
          query: query,
          entries: response.data.data,
          total: response.headers['total'],
          perPage: response.headers['per-page'],
          currentPage: response.headers['current-page'],
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }

  handlePageClick = data => {
    let selected = data.selected;
    this.setState({ page: selected + 1}, () => {
      this.performSearch(this.state.query);
    });
  };
  
  render() { 
    return (
      <div>
        
        <div className="main-header">
          <div className="inner">
            <SearchForm onSearch={this.performSearch} query={this.state.query} />      
          </div>   
        </div>
      
        <div className="main-content">
          { this.state.entries.length > 0 &&
            <div className="jumbotron  jumbotron-fluid">
              <button type="button" className="btn btn-light">
                Query <span className="badge badge-primary">{this.state.query}</span>
              </button>
              <button type="button" className="btn btn-light">
                Entries <span className="badge badge-primary">{this.state.total}</span>
              </button>
              <button type="button" className="btn btn-light">
                Per Page <span className="badge badge-primary">{this.state.perPage}</span>
              </button>
              <button type="button" className="btn btn-light">
                Current Page <span className="badge badge-primary">{this.state.currentPage}</span>
              </button>

            </div>
          }
       
          {
            (this.state.loading)
             ? <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
             : <div>
              
              <EntryList data={this.state.entries} query={this.state.query}/>
              { this.state.entries.length > 0 && 
                <div className="jumbotron  jumbotron-fluid">
                  <ReactPaginate
                      previousLabel={'prev'}
                      nextLabel={'next'}
                      breakLabel={'...'}
                      pageClassName={'page-item'}
                      pageLinkClassName={'page-link'}
                      breakClassName={'break-me'}
                      pageCount={this.state.total / this.state.perPage}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={this.handlePageClick}
                      containerClassName={'pagination'}
                      subContainerClassName={'pages pagination'}
                      activeClassName={'active'}
                      previousClassName={'page-item'}
                      nextClassName={'page-item'}
                      previousLinkClassName={'page-link'}
                      nextLinkClassName={'page-link'}
                    /> 
                  </div>
                }
              </div>
          }     
        </div>
      </div>
    );
  }
}
