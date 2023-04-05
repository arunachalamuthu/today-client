import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setname]=useState([])
  const [change,changename]=useState([])
  const find =()=>{
  
    fetch(`https://today-server.vercel.app/api`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({user:name})
      
    })

    .then((res)=>{
      console.log(res)
      return res.json()
    })
    .then((data)=>{
      console.log(data);
      changename(data.user)
      // setname(data)
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
  {/* {name} */}
  {change}
    </div>
  );
}

export default App;
