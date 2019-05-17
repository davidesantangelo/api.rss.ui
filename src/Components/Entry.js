import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import Truncate from 'react-truncate';

const Entry = props => {
  let sentimentClass = '';

  if (props.sentiment === 'positive') {
    sentimentClass = 'far fa-smile';
  } else if (props.sentiment === 'negative') {
    sentimentClass = 'far fa-frown';
  } else {
    sentimentClass = 'far fa-meh';
  }

  let tags = props.tags.slice(0, 4).map((tag, key) =>
    <a href={tag.uri} target="_BLANK"><span  title={tag.label} className="badge badge-secondary" key={tag.uri}>#{tag.label}</span></a>
  );
  
  return(
    <div className="entry-box">

      <div className="entry-box-head">
        <a href={props.url} rel="noopener noreferrer" target="_BLANK">{props.title}</a>
        <span className="url">
          <Truncate lines={1} ellipsis={<span>...</span>}>
            {props.url}
          </Truncate>
        </span>
      </div>

      <div className="entry-tags">
        {tags}
      </div>
      
      <div className="body">
        <Truncate lines={3} ellipsis={<span>...</span>}>
            {props.text}
        </Truncate>
      </div>
      
      <div className="date"><Moment date={props.timestamp * 1000} /></div>

      <div className="information">
        <a className="btn btn-light btn-sm" href={props.url} target="_BLANK" title={props.url}>URL <i className="fas fa-external-link-square-alt"></i></a>
        <a className="btn btn-light btn-sm" href={props.feed} target="_BLANK" title={props.feed}>RSS <i className="fas fa-rss"></i></a>
        { props.sentiment &&
          <a className="btn btn-light btn-sm" title={'sentiment: ' + props.sentiment + ', score: ' + props.sentiment_score}>SENTIMENT <i className={sentimentClass}></i></a>
        }
      </div>            
    </div>
  );
}

export default Entry;