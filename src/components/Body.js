import React from 'react';
import "./css/Body.css"

const Body = (props) => {
  return(
    <div>
      <img src={props.image} alt="Smiley face" height="150" width="150" />
    </div>
  )
}

export default Body;
