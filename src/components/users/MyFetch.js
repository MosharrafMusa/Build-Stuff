import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function MyFetch() {
    const [data, setData] = useState([])
    useEffect (async()=>{
        const result = await axios('https://jsonplaceholder.typicode.com/posts')
        setData(result.data)
    }, [])
    return (
       <>
       <ul>
           {
               data.map(item=>(
                   <li key={item.id}>Title:{item.title} Body:{item.body}</li>
                   
               ))
           }
       </ul>
       </>
    )
}

