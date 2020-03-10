import React from 'react';

const NoQuery = props => {

  let queries = [
    'news',
    'sports',
    'amazon',
    'weather',
    'finance',
    'entertainment',
    'economy',
    'f1',
    'space',
    'politics',
    'health'
  ]

  let query = queries[Math.floor(Math.random() * queries.length)];
  let url = "/?q=" + query + "&page=1"

  return (
    <div>
      <h5>Search entries or whatever you want to search (news, sports, economy). Take a look at the RESTful <a target="_BLANK" rel="noopener noreferrer" href="https://github.com/davidesantangelo/feedi">API</a>.</h5>
      <p><br></br><a href='/?q=coronavirus&page=1'><button type="button" className="btn btn-danger">Covid19 <i className="fas fa-heartbeat"></i></button></a> <a href={url}><button type="button" className="btn btn-primary">random <i className="fas fa-random"></i></button></a></p> 
      <p></p> 
    </div>
  );
  
}

export default NoQuery;