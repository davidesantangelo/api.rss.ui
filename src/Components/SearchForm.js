import React, { Component } from 'react';
import queryString from 'query-string'

export default class SearchForm extends Component {
  
  constructor(props) {
    super(props);
    let parsedQuery = queryString.parse(window.location.search);
    let q = parsedQuery.q

    this.state = {value: q};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onSearchChange = e => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value, 1);
  }
  
  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="text"
               value={this.state.value}
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Search entries..." />
      
      </form>      
    );
  }
}