import React ,{ useState,useMemo } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
function App() {
    const[defaultIntegerValue , setDefaultIntegerValue]= useState(1);
  
    const fizzBuzzString = useMemo(() => {
      let fizzString='';
      if(defaultIntegerValue % 3 === 0){
       fizzString= 'Fizz';
      }
      if(defaultIntegerValue%5 === 0){
        fizzString += 'Buzz';
      }
     return fizzString
    },[defaultIntegerValue]); 

    return (
      <div className="App">
        <div>
          {defaultIntegerValue}
        </div>
        <div>
          {fizzBuzzString}
        </div>
        <div>
          <Button onClick = {() => setDefaultIntegerValue(defaultIntegerValue < 100 ? defaultIntegerValue +1: 100)}>
            Increase Counter
          </Button>
        </div>
        <div>
          <Button onClick = {() => setDefaultIntegerValue(defaultIntegerValue > 1 ? defaultIntegerValue - 1 : 1)}>
            Decrease Counter 
          </Button>
        </div>
      </div>
    );
  
}

export default App;
