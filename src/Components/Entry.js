import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import Truncate from 'react-truncate';

const Entry = props => (
  <div className="entry-box">  
    <a href={props.url} target="_BLANK">{props.title}</a>
    <span className="url">{props.url}</span>
      <div className="body">
        <Truncate lines={3} ellipsis={<span>...</span>}>
            {props.text}
        </Truncate>
      </div>
     
    <div className="moment"><Moment date={props.timestamp * 1000} /></div>
  </div>

);

export default Entry;