import React from 'react';

const NoEntries = props => (
  <div>
    Your search for - <strong>{props.query}</strong> - did not match any documents
    <p><br></br><a href="/?q=github&page=1"><button type="button" className="btn btn-secondary">Back</button></a></p> 
  </div>
);

export default NoEntries;