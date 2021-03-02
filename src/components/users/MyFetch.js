import axios from 'axios'
import React, {useState, useEffect} from 'react'

const MyFetch = () => {
    const [data, setData]= useState([])
    useEffect(async()=>{
        const result = await axios('https://jsonplaceholder.typicode.com/posts')
        setData(result.data)

    })
   
    return (
        <ul>
           { data.map(item=> (
               <li key = {item.id}>
                  <h2>{item.title}</h2> 
                  <p>{item.body}</p>
               </li>

            )

            )}
        </ul>
    )
}

export default MyFetch
