import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
  let minValue=0;
  let maxValue=5;
  const [counter,setCounter]=useState(minValue);

  const included=()=>{
    setCounter(counter+1)
  };
  const reset=()=>{
    setCounter(minValue)
  }



  return (
    <div className="App">
      <Counter title='This is my Counter'
          counter={counter}
               maxValue={maxValue}
               minValue={minValue}
               included={included}
                reset={reset}/>

        </div>


  );
}

export default App;
