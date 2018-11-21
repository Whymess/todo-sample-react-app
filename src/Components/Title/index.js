import React from 'react';
import './Title.css'

export default (props) => {
  return (
    <div className="Title p-2 "> {props.title || 'No Title Provided'} </div>
  )
}

