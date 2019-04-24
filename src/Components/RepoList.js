import React from 'react';
import Repo from './Repo';
import NoEntries from './NoEntries';

const RepoList = props => { 
  
  const results = props.data;
  let repos;
  if (Array.isArray(results) && results.length) {
    repos = results.map(repo => <Repo title={repo.attributes.title} url={repo.attributes.url} text={repo.attributes.text} timestamp={repo.attributes.published_at}/>);    
  } else {
    repos = <NoEntries query={props.query} />
  }

  return(
    <ul className="entry-list">
      {repos}
    </ul> 
  );
}

export default RepoList;
