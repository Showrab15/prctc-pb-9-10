import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
    </div>
  );
}


function Mobile(){

  const [power, setPower] = useState(100)

  
  const downPower = () =>{
const newPower = power - 10;

if(newPower>=0){
  setPower(newPower)

}


  }
  return(
    <div>
      <h3>Power{power}</h3>
      <button onClick={downPower}  >Down Your Battery</button>
    </div>
  )
}

export default App;
