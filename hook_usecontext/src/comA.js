import React,{useContext} from 'react'
import {Fname,Lname} from "./App"
export default function comA() {

    const name = useContext(Fname);
    const lname = useContext(Lname)
    return (
        <div>
            <h1>My name is {name} {lname}</h1>
        </div>
    )
}
