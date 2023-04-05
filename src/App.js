import logo from './logo.svg';
import './App.css';
const find =()=>{
  fetch('https://today-server.vercel.app/')
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data);
  })
}
function App() {
  return (
   <div>
 <button onClick={find}>
  click
  </button> 
    </div>
  );
}

export default App;
