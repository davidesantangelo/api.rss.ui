import React, { Component } from 'react';
import 'normalize.css'
import 'sanitize.css'
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import EntryList from './Components/EntryList';
import ReactPaginate from 'react-paginate';
import strictUriEncode from 'strict-uri-encode';
import queryString from 'query-string'

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      entries: [],
      loading: true,
      total: 0,
      perPage: 0,
      currentPage: 0
    };
  }

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = '', page = null) => {
    const parsed = queryString.parse(window.location.search);
    page = parsed.page ? parsed.page : 1

    if (query) {
      window.location.search = "?q=" + strictUriEncode(query) + "&page=" + 1;
    }
   
    query = parsed.q
   
    if (query) {
      axios.get(`https://api.feedirss.com/search/entries?q=${query}&page=${page}`)
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
          this.setState({ loading: false , entries: [], query: query });
        });    
    } else {
      this.setState({ loading: false , entries: [], query: '' })
    }
  }

  handlePageClick = data => {
    let selected = data.selected;

    window.location.search = "?q=" + strictUriEncode(this.state.query) + "&page=" + (selected + 1);
  };
  
  render() { 
    return (
      <div>
        
        <div className="main-header">
          <div className="github-star">
            <a className="github-button" href="https://github.com/davidesantangelo/feedirss-api" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star davidesantangelo/feedirss-api on GitHub">GitHub</a>
          </div>
        <div className="inner">
          <h2>DatoRSS   <i className="fas fa-rss"></i></h2>
            <SearchForm onSearch={this.performSearch} query={this.state.query} />      
          </div>   
          { this.state.entries.length > 0
          ?
          <div className="main-info">
         
            <div className="jumbotron jumbotron-fluid">
              <div className="btn-group" role="group">
                <button type="button" title="home" className="btn btn-sm btn-secondary">
                  <a href="/"><i className="fas fa-home"></i></a>
                </button>
                <button type="button" title="query" className="btn btn-sm btn-light">
                  q <span className="badge badge-dark">{this.state.query ? this.state.query : 'blank'}</span>
                </button>
                <button type="button" title="total" className="btn btn-sm btn-light">
                  tot <span className="badge badge-dark">{this.state.total}</span>
                </button>
                <button type="button" title="result per page" className="btn btn-sm btn-light">
                  per page <span className="badge badge-dark">{this.state.perPage}</span>
                </button>
                <button type="button" title="current page" className="btn btn-sm btn-light">
                  current page <span className="badge badge-dark">{this.state.currentPage}</span>
                </button>             
             
              </div>
            </div>
            
          </div>
          :
            <div className="main-info">
                <div className="jumbotron jumbotron-fluid">
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <a href='/?q=coronavirus&page=1'className="btn btn-sm btn-danger">Covid19 <i className="fas fa-heartbeat"></i></a>  &nbsp;
                    <a href='/?q=news&page=1' className="btn btn-sm btn-secondary">news <i className="far fa-newspaper"></i></a>  &nbsp;
                    <a href='/?q=sports&page=1' className="btn btn-sm btn-secondary">sports <i className="fas fa-baseball-ball"></i></a>  &nbsp;
                    <a href='/?q=finance&page=1' className="btn btn-sm btn-secondary">finance <i className="fas fa-wallet"></i></a>  &nbsp;
                    <a href='/?q=health&page=1' className="btn btn-sm btn-secondary">health <i className="fas fa-file-medical"></i></a>  &nbsp;

                  </div>
                </div>
            
            </div>
          }
        </div>
      
        <div className="main-content">
          
          {
            (this.state.loading)
             ? <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
             : <div>
              
              <EntryList data={this.state.entries} query={this.state.query}/>

              { this.state.entries.length > 0 && 
                <div className="btn-group" role="group">
                  <ReactPaginate
                      previousLabel={'prev'}
                      nextLabel={'next'}
                      breakLabel={'...'}
                      forcePage={this.state.currentPage - 1}
                      pageClassName={'page-item'}
                      pageLinkClassName={'page-link'}
                      breakClassName={'break-me'}
                      pageCount={this.state.total / this.state.perPage}
                      marginPagesDisplayed={2}
                      onPageChange={this.handlePageClick}
                      pageRangeDisplayed={2}
                      containerClassName={'pagination pagination-sm'}
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
        { this.state.entries.length > 0 && 
          <div className="main-content main-author">
            creator <a title="Davide Santangelo" href="https://davidesantangelo.com">davidesantangelo.com</a> | code <a href="https://github.com/davidesantangelo/datorss">github</a> | donate <a href="https://www.buymeacoffee.com/582rhJH" target="_BLANK" rel="noopener noreferrer">bmc</a>
          </div>
        }

        { !this.state.loading && this.state.entries.length === 0 && 
          <div className="main-content main-footer">
            creator <a title="Davide Santangelo" href="https://davidesantangelo.com">davidesantangelo.com</a> | code <a href="https://github.com/davidesantangelo/datorss">github</a> | donate <a href="https://www.buymeacoffee.com/582rhJH" target="_BLANK" rel="noopener noreferrer">bmc</a>
          </div>
        } 
      </div>
    );
  }
}
