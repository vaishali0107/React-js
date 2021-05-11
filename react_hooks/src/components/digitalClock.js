import React ,{useState}from 'react'

export default function digitalClock() {
   
    var time = new Date().toLocaleTimeString();
    const [ctime,setTime] = useState(time);
    var updateTime=()=>{
           var newtime = new Date().toLocaleTimeString();
           setTime(newtime);
    }
    setInterval(updateTime,1000);
    return (
        <div>
            <h1>{ctime}</h1>
           
        </div>
    )
}
