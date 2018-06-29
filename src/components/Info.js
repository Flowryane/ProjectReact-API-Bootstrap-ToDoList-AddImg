import React from "react";
import "./css/Info.css"

const Info = (props) =>{
  return(
    <div className="mdr">
      <h3>Location :{props.info.name}, {props.info.sys.country}</h3>
      <h3>Humidity :{props.info.main.humidity}</h3>
      <h3>Temperature :{Math.floor(props.info.main.temp-273.15)}°C</h3>
      <h3>Conditions :{props.info.weather[0].description}</h3>
    </div>
  )
}

export default Info;
