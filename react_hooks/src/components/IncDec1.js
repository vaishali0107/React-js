import React,{useState} from 'react'

export default function IncDec1() {
    var [inc,setInc] = useState("0")
    const center_div={
        height:"200px",
        width:"200px",
        backgroundColor:"green",
        margin:"20px"
    }
    const heading={
        backgroundColor:"blue",
        position:"relative",
        top:"30px",
        textAlign:"center",
        color:"white",
        border:"2px solid white",
    }
    const button = {
       position:"relative",
       top:"30px",
       margin:"10px",
       backgroundColor:"blue" ,
       color:"white",
       borderRadius:"5px",
       border:"2px solid white",
       padding:"5px"
    }
var increment =()=>{
    setInc(inc = inc+1)
}
const decrement = ()=>{
    if(inc==0){
        alert("0 is reached")
    }
    else{
        setInc(inc=inc-1)
    }
   
}
    return (
        <div style={center_div}>
            <h1 style={heading}>{inc}</h1>
            <button style={button} onClick={increment}>Increment</button>
            <button style={button} onClick={decrement}>Decrement</button>
        </div>
    )
}

