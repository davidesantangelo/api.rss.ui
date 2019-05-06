import React from 'react';

const NoEntries = props => (
  <div>
    Your search for - <strong>{props.query}</strong> - did not match any documents
   <p><br></br><a href="/"><button type="button" className="btn btn-primary">Back</button></a></p> 
  </div>
);

export default NoEntries;