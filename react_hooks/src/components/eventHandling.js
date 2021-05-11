import React,{useState} from 'react'

export default function eventHandling() {
    const purple =  "#8e44ad";
    var name="Click me";
    const [bg, setBg] = useState(purple);
    const [btn,setBtn] = useState(name);
    
    const click=()=>{
        const red = "red";
        const newname = "Hello 👋";
        setBg(red);
        setBtn(newname);
    }
    const double = ()=>{
        const purple="purple";
        setBg(purple);
        setBtn("Hii Everyone 😄");
    }
    return (
        <div className="eventHandling" style = {{backgroundColor:bg}}>
            <button className="button" onClick={click} onDoubleClick={double}>{btn}</button>
        </div>
    )
}
