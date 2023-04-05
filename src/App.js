import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setname]=useState([])
  const find =()=>{
  
    fetch(`https://today-server.vercel.app/api${name}`)
    .then((res)=>{
      console.log(res)
      return res.json()
    })
    .then((data)=>{
      console.log(data);
      setname(data)
    })
  }
  return (
   <div>
    <input type="text" onChange={(e)=>{
      setname(e.target.value)
    }} />
 <button onClick={find}>
  click
  </button> 
  {name}
    </div>
  );
}

export default App;
