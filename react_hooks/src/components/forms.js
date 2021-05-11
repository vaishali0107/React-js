import React,{useState} from 'react'

export default function () {
    const [name,setName] = useState("")
    const [fullName,setFullName] = useState("")
    const inputEvent=(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    const clickEvent=(event)=>{
        event.preventDefault();
        setFullName(name)
    }
    return (
        <>
        <form onSubmit={clickEvent}>
            <h1>Hello {fullName}</h1>
            <input type="text" placeholder="enter your name" onChange={inputEvent} value={name}></input>
            <br></br>
            <button type="submit" >Submit</button>
        </form>
        </>
    )
}
