import React from 'react';

const NoEntries = props => (
  <div>
    Your search for - <strong>{props.query}</strong> - did not match any documents
  </div>
);

export default NoEntries;