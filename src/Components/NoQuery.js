import React from 'react';

const NoQuery = props => {

  let queries = [
    'news',
    'sport',
    'dev',
    'facebook',
    'youtube',
    'amazon',
    'instagram',
    'weather',
    'finance',
    'entertainment',
    'economy',
    'netflix',
    'f1',
    'space'
  ]

  let query = queries[Math.floor(Math.random() * queries.length)];
  let url = "/?q=" + query + "&page=1"

  return (
    <div>
      <h5>search entries or whatever you want to search.</h5>
      <p><br></br><a href={url}><button type="button" className="btn btn-danger">choose for me <i className="fas fa-random"></i></button></a></p> 
    </div>
  );
  
}

export default NoQuery;