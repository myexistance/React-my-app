import React, { Component } from 'react';

import './App.css';

class App extends Component {
constructor (props){
  super(props);
  this.state={
    crazy: [],
    isLoaded:false
  }
}
componentDidMount(){
  fetch('https://my.api.mockaroo.com/person.json?key=64782ac0')
  .then(res=>res.json())
  .then(json=>{
    this.setState({
      isLoaded:true,
      items:json

    })
  })

}





  render() {
    var {isLoaded, items} =this.state;
    if (!isLoaded){
      return(
        <div>  '...Loading...' </div>
      )
    }else {
      return(
        <div>
        <ul>
        {items.map(crazy =>(
        <li className="myList"> key ={crazy.id} {crazy.first_name} |
        Email: {crazy.email} | Avatar: {crazy.avatar}
        </li>
      ))};

      </ul>


      </div>
    );
   }
  }
}




export default App;
