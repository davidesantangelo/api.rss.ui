import React from 'react';

const NoEntries = props => {
  return(
    <div>
      Your search for - <strong>{props.query}</strong> - did not match any documents
      <p><br></br><a href="/"><button type="button" className="btn btn-secondary">Back</button></a></p> 
    </div>
  );
}

export default NoEntries;