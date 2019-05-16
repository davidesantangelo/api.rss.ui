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

      <a href={props.url} rel="noopener noreferrer" target="_BLANK">{props.title}</a>
      <span className="url">
        <Truncate lines={1} ellipsis={<span>...</span>}>
          {props.url}
        </Truncate>
      </span>
      
      <div className="body">
        <Truncate lines={3} ellipsis={<span>...</span>}>
            {props.text}
        </Truncate>
      </div>
      
      <div className="date"><Moment date={props.timestamp * 1000} /></div>

      <div className="information">
        <button className="btn btn-light btn-sm"><a href={props.url} target="_BLANK" title={props.url}> <i className="fas fa-external-link-square-alt"></i></a></button>
     
        <button className="btn btn-light btn-sm"><a href={props.feed} target="_BLANK" title={props.feed}><i className="fas fa-rss"></i></a></button>
        { props.sentiment &&
          <button className="btn btn-light btn-sm"><a title={'sentiment: ' + props.sentiment + ', score: ' + props.sentiment_score}><i className={sentimentClass}></i></a></button>
        }
      </div>            

      
    </div>
  );
}

export default Entry;