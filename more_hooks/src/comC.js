import React from 'react'
import {Fname,Lname} from "./App";

export default function comC() {
    return (
        <div>
            <Fname.Consumer>{(fname)=>{
                return(
                    <Lname.Consumer>
                        {(lname)=>{
                            return <h1>My name is {fname} {lname}</h1>
                        }}
                    </Lname.Consumer>
                    ) 
                }}
            </Fname.Consumer>
            
        </div>
    )
}
