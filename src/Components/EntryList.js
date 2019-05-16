import React from 'react';
import Entry from './Entry';
import NoEntries from './NoEntries';
import NoQuery from './NoQuery';

const EntryList = props => { 
  
  const results = props.data;
  let entries;
  if (Array.isArray(results) && results.length) {
    entries = results.map(entry => <Entry key={entry.id} feed={entry.relationships.feed.links.related} title={entry.attributes.title} url={entry.attributes.url} text={entry.attributes.text} tags={entry.attributes.tags} sentiment={entry.attributes.sentiment ? entry.attributes.sentiment.type : null} sentiment_score={entry.attributes.sentiment ? entry.attributes.sentiment.score : null} timestamp={entry.attributes.published_at}/>);
  } else {
    if (props.query) {
      entries = <NoEntries query={props.query} />
    } else {
      entries =  <NoQuery />
    }
  }

  return(
    <ul className="entry-list">
      {entries}
    </ul> 
  );
}

export default EntryList;
