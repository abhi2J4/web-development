import React, { useState } from 'react';
const Counter = ()=>{

const [counter,setcounter]=useState(0)

 
  return (
    <div>
      
      <p id='para'>we click me {counter} times</p>
   <button onClick={()=>{setcounter(counter+1)}}>click me</button>   
    </div>
  );
}

export default Counter;
