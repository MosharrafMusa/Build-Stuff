// import LearnJSX from "./basicStuff/learnJSX";
import React, {Component} from 'react'
import Navbar from './basicStuff/LearnProps'
import PropsFC from "./basicStuff/PropsFC";
import Users from './basicStuff/Users'
import axios from 'axios'



export default class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount(){
    this.setState({loading: true});
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
    this.setState({users: res.data, loading: false})

  }
  render(){
  return (
    <div className="App">
      <Navbar title = "Github" subtitle ="test"/> 
      <PropsFC title = {2 +2} name = "Musa" />
      <Users loading={this.state.loading} users = {this.state.users}/>
    </div>
  );
}
}

