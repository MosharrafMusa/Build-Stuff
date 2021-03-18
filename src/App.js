
import React, {useState} from 'react'
import CounterClass from './components/webDevSimplified/CounterClass'
import CounterClass2 from './components/webDevSimplified/CounterClass2';
import CounterFunctional from './components/webDevSimplified/CounterFunctional';

import Lession01 from './components/webDevSimplified/Lession01'
import Lession04 from './components/webDevSimplified/Lession04'
export const ThemeContext = React.createContext()
function App () 
 { 
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value = {{backgroundColor: theme}}>
    <div className="App">
    Counter with Hooks
    <CounterFunctional initialCount={0}/>
    <button onClick={()=>setTheme(prevTheme=>{
      return prevTheme === 'red'? 'blue':'red'
    })}>Toggler</button>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;


