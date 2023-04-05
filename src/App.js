import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setname]=useState([])
  const find =()=>{
  
    fetch('https://today-server.vercel.app/api')
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
 <button onClick={find}>
  click
  </button> 
    </div>
  );
}

export default App;
