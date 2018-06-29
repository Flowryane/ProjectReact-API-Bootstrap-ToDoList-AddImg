import React, { Component } from 'react';
import axios from "axios";
import Header from './components/Header';
import Bodys from './components/Bodys';
import Footer from './components/Footer';
import Info from './components/Info'

const KEY = '915f3008a44ac3596783fc21218bae19';

class App extends Component {
  state = {
    input: "",
    valeur : {}
  }

componentWillMount(){
  this.getDataFromApiDefault();
}

Clickmeteo = () => {
  this.getDataFromApi();
}

getInput = (event) => {
  console.log(event.target.value)
  this.setState({input : event.target.value})
}

handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    this.Clickmeteo();
  }
}

getDataFromApiDefault = () => {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${KEY}`)
  .then((response) =>{
    console.log(response)
    this.setState({ valeur: response}, () => {
    console.log(this.state.valeur)
  })
  })
}

getDataFromApi = () => {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=${KEY}`)
  .then((response) =>{
    console.log(response)
    this.setState({ valeur: response}, () => {
    console.log(this.state.valeur)
  })
  })
}

  render() {
  const datahere = () => {
      if (this.state.valeur.data) {
        return(
        <Info info={this.state.valeur.data}/>
        )
      }
    }
    return (
      <div>
      <Header />
      <h1>METEO</h1>
      <div className="footerlol">
        <Footer keypress = {this.handleKeyPress} input = {this.getInput} btn = {this.Clickmeteo}/>
      </div>
      <div className="footerlol2">
      {
        datahere()
      }
    </div>
    <div className="">
      <Bodys />
    </div>
    </div>
    );
  }
}
export default App;
