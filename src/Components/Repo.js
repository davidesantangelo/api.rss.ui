import React from 'react';

const Repo = props => (
  <p>  
    <a href={props.url} target="_BLANK">{props.title}</a>
    <span>{props.body}</span>
  </p>
);

export default Repo;