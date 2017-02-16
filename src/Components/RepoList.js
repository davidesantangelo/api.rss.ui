import React from 'react';
import Repo from './Repo';
import NoRepos from './NoRepos';

const RepoList = props => { 
  
  const results = props.data;
  let repos;
  if (results.length) {
    repos = results.map(repo => <Repo url={} key={} />);    
  } else {
    repos = <NoRepos />
  }

  return(
    <ul className="repo-list">
      {repos}
    </ul> 
  );
}

export default RepoList;
