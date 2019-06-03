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
    <a href={tag.uri} key={tag.uri} target="_BLANK" rel="noopener noreferrer"><span title={tag.label} className="badge badge-light badge-tag">#{tag.label}</span></a>
  );
  
  return(
    <div className="entry-box">

      <div className="entry-box-head">
        <span title={'feed rank: ' + props.feed.title} className="feed-rank">{props.feed.rank}</span> <a href={props.url} rel="noopener noreferrer" target="_BLANK">{props.title}</a>
        <span className="url">
          {props.url}
        </span>
      </div>

      <div className="entry-tags">
        {tags}
      </div>
      
      <div className="body">
        <span className="date"><Moment fromNow date={props.timestamp * 1000} /></span> - <Truncate lines={3} ellipsis={<span>...</span>}>
            {props.text}
        </Truncate>
      </div>
    

      <div className="actions">
        <a className="btn btn-light btn-sm btn-action" href={props.url} target="_BLANK" rel="noopener noreferrer" title={props.url}>URL <i className="fas fa-external-link-square-alt"></i></a>
        <a className="btn btn-light btn-sm btn-action" href={props.feed.url} target="_BLANK" rel="noopener noreferrer" title={props.feed.title}>RSS <i className="fas fa-rss"></i></a>
        { props.sentiment &&
          <a className="btn btn-light btn-sm btn-action" title={'sentiment: ' + props.sentiment + ', score: ' + props.sentiment_score}>SENTIMENT <i className={sentimentClass}></i></a>
        }
      </div>            
    </div>
  );
}

export default Entry;