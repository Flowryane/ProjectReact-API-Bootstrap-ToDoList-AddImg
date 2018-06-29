import React from 'react';
import Body from './Body'

class Bodys extends React.Component{

  state = {
    tableau : [
      "https://cdn.dribbble.com/users/46302/screenshots/4680183/super.png",
      "https://cdn.dribbble.com/users/1523430/screenshots/4679354/wallet.png",
      "https://cdn.dribbble.com/users/1247264/screenshots/4679167/sc.png"
    ],
    valeur : []
  }

handleClick = () => {
  this.setState({
    tableau : [...this.state.tableau, "https://cdn.dribbble.com/users/1399014/screenshots/4679825/zi86_1x.jpg"]
  })
}
Buttonclick = (i) => {
  const array = this.state.valeur;
  array.splice(i, 1);
  this.setState({
    valeur : array
  });
  console.log(this.state.valeur)
  }
Click = () => {
  // const reversed = this.state.valeur.reverse();
  const testValue = document.querySelector("#test").value;
  const newvalue = testValue.length;
  if (testValue === "bonjour") {
    return(
      alert("salut va ca ?"),
      test.value = "lol",
      setTimeout(function(){
        test.value = ""
      }, 3000)
    )
  }
  else{
    if (newvalue !== 0) {
      return(
        this.setState({
          valeur : [...this.state.valeur, testValue]
        }),
        test.value = ""
      )
    }
    else {
      return(
        alert("merci de rentrer une valeur")
      )
    }
  }

}
  render() {
    const renderImg = this.state.tableau.map((index) => {
      return(
        <Body image={index}/>
      )
    });
    const rendervalue = this.state.valeur.map((index, i) =>{
      return(
        <div className="todolisttg">
          <button onClick={this.Buttonclick.bind(this, i)}>{index}</button>
        </div>
      )
    });
    // console.log(renderImg)
    return(
      <div>
      <h1>IMAGE</h1>
      <div className="imgbody2">{
        renderImg
      }
    </div>
    <div className="btnimage">
      <button onClick={this.handleClick}>Rajouter une image dans un tableau content déjà des images</button>
    </div>
        <h1>To Do List</h1>
        <div className="btntodo">
        <input id="test" type="text"/>
        </div>
        <div className="btntodo2">
        <button onClick={this.Click}>inscrire un mot dans la todo et appuyer dessus pour le supprimer</button>
        </div>
        <div className="todolist">
            {
             rendervalue
           }
       </div>
      </div>
    );
  }
}

export default Bodys;
