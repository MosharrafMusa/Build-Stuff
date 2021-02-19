// import LearnJSX from "./basicStuff/learnJSX";
import React, {Component} from 'react'
import Navbar from './basicStuff/LearnProps'
import PropsFC from "./basicStuff/PropsFC";
import Users from './basicStuff/Users'
import axios from 'axios'



export default class App extends Component {
  async componentDidMount(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
    console.log(res.data)

  }
  render(){
  return (
    <div className="App">
      <Navbar title = "Github" subtitle ="test"/> 
      <PropsFC title = {2 +2} name = "Musa" />
      <Users/>
    </div>
  );
}
}

