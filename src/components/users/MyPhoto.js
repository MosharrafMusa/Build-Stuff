import React, { useState, useEffect} from 'react'
import axios from 'axios'


const MyPhoto = () => {
    const [data, setData] = useState([]);
 
  useEffect(async () => {
    const result = await axios(
      'https://jsonplaceholder.typicode.com/users',)
 
    setData(result.data);
  });
 
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.name}</a>
          <h3>email:{item.email}</h3>
          <p>{item.username}</p>
        </li>
      ))}
    </ul>
  );
}

export default MyPhoto

