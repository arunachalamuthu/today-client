import logo from './logo.svg';
import './App.css';

function App() {
  const find =()=>{
  
    fetch('https://today-server.vercel.app/api')
    .then((res)=>{
      console.log(res)
      return res
    })
    .then((data)=>{
      console.log(data);
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
