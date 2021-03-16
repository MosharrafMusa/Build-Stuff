import React, {useState} from 'react'

function Lession04() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick = {()=>setCount(count-1)}>-</button>
            <span>count: {count}</span>
            <button onClick = {()=>setCount(count+1)}>+</button>
        </div>
    )
}

export default Lession04

