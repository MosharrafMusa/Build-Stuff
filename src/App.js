
import React, {Component} from 'react'
import CounterClass from './components/webDevSimplified/CounterClass'
import CounterClass2 from './components/webDevSimplified/CounterClass2';

import Lession01 from './components/webDevSimplified/Lession01'
import Lession04 from './components/webDevSimplified/Lession04'

export default class App extends Component {
  
  render(){
   
  return (
    <>
    <div className="App">
    <CounterClass2 initialCount = {0}/>
    </div>
    </>
  );
}
}

