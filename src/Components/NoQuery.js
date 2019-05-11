import React from 'react';

const NoQuery = props => (
  <div>
    search entries or whatever you want to search
    <p><br></br><a href="/?q=github&page=1"><button type="button" className="btn btn-info">Try search 'github'</button></a></p> 
  </div>
);

export default NoQuery;