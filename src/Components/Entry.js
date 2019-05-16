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
      
      <div className="body">
        <Truncate lines={3} ellipsis={<span>...</span>}>
            {props.text}
        </Truncate>
      </div>
      
      <div className="date"><Moment date={props.timestamp * 1000} /></div>

      <div className="information">
        <a className="btn btn-light btn-sm" href={props.url} target="_BLANK" title={props.url}> <i className="fas fa-external-link-square-alt"></i></a>
        <a className="btn btn-light btn-sm" href={props.feed} target="_BLANK" title={props.feed}><i className="fas fa-rss"></i></a>
        { props.sentiment &&
          <a className="btn btn-light btn-sm" title={'sentiment: ' + props.sentiment + ', score: ' + props.sentiment_score}><i className={sentimentClass}></i></a>
        }
      </div>            
    </div>
  );
}

export default Entry;