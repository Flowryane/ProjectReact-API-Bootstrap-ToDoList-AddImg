import React from 'react';
import "./css/Footer.css"

const Footer = (props) => {
  return(
    <div>
    <div className="met">
    La météo est appelé via une API
  </div>
    <div className="met2">
      <input onChange={props.input} placeholder=" > rentrer une ville < " onKeyPress={props.keypress}></input>
      <button onClick={props.btn}>météo city</button>
    </div>
  </div>
  )
}
export default Footer;
