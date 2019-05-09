import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import Truncate from 'react-truncate';

const Entry = props => {
  let sentimentClass = '';

  if (props.sentiment == 'positive') {
    sentimentClass = 'success';
  } else if (props.sentiment == 'negative') {
    sentimentClass = 'danger';
  } else {
    sentimentClass = 'secondary';
  }

  return(
    <div className="entry-box">

      <span title={'sentiment: ' + props.sentiment + ', score: ' + props.sentiment_score} className={"badge badge-" + sentimentClass}>{props.sentiment}</span>
      <a href={props.url} target="_BLANK">{props.title}</a>
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
      
      <div className="informations">
        <span className="badge badge-light"><Moment date={props.timestamp * 1000} /></span>
        <span className="badge badge-light"><a href={props.feed}>{props.feed}</a></span>
        
      </div>            

      
    </div>
  );
}

export default Entry;