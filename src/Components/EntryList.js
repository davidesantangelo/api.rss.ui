import React from 'react';
import Entry from './Entry';
import NoEntries from './NoEntries';

const EntryList = props => { 
  
  const results = props.data;
  let entries;
  if (Array.isArray(results) && results.length) {
    entries = results.map(entry => <Entry title={entry.attributes.title} url={entry.attributes.url} text={entry.attributes.text} timestamp={entry.attributes.published_at}/>);
  } else {
    entries = <NoEntries query={props.query} />
  }

  return(
    <ul className="entry-list">
      {entries}
    </ul> 
  );
}

export default EntryList;
