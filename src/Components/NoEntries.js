import React from 'react';

const NoEntries = props => (
  <div className='no-entries'>
    <p>Your search for - <strong>{props.query}</strong> - did not match any documents.</p>
  </div>
);

export default NoEntries;