import React ,{useState} from 'react'

export default function incDec() {
    var [count,setCount] = useState(0);
    var [c,setC] = useState(10);
    var incNum=()=>{
      setCount(count=count+1);
    }
    var decNum = ()=>{
      setC(c=c-1);
    }
    return (
      <>
      <h1>{count}</h1>
      <button onClick={incNum}>Increment</button>
      <h1>{c}</h1>
      <button onClick={decNum}>Increment</button>
      </>
    );
  }
  

