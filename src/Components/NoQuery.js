import React from 'react';

const NoQuery = props => {

  let queries = [
    'news',
    'sports',
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
      <h5><strong>DatoRSS – RSS Search Engine</strong></h5>
      <p>
      <h5>Fast, Awesome, Clean and Powerful RSS search engine, browse through over <strong>800,000</strong> RSS posts. </h5>
      </p>
    </div>
  );
  
}

export default NoQuery;