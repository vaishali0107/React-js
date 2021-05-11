import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Tooltip from '@material-ui/core/Tooltip';
export default function IncDec1() {
    var [inc,setInc] = useState(inc=0)
    
    const center_div={
        height:"200px",
        width:"200px",
        backgroundColor:"white",
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
            <h1 >{inc}</h1>
            <Tooltip title="Add">
            <Button style={{color:"green"}}  onClick={increment}><AddIcon/></Button>
            </Tooltip>
            <Tooltip title="Delete">
            <Button style={{color:"red"}} onClick={decrement}><RemoveIcon/></Button>
            </Tooltip>
        </div>
    )
}