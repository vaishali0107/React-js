import React,{useState} from 'react'

export default function forms3() {
    const [name,setName] = useState({
        fname:"",
        lanem:'',
        password:'',
        email:'',
        phone:""
    })
    const inputEvent=(event)=>{
        const {value,name} = event.target;
        setName((prevalue)=>{
            return{
                ...prevalue,[name]:value,
            }})
        
        }
        const onSubmit=(e)=>{
            e.preventDefault();
            alert("Form Submitted.")
        }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <h1>Hello {name.fname} {name.lname} {name.password}
            </h1>
            <p>{name.email} and {name.phone}</p>
            <input type="text" placeholder="Enter your firstname" value={name.fname} name="fname" onChange={inputEvent}/>
            <br/>
            <input type="text" placeholder="Enter your lastname" value={name.lname} name="lname" onChange={inputEvent}/>
            <br/>
            <input type="text" placeholder="Enter your Password" value={name.password} name="password" onChange={inputEvent}/>
            <br></br>
            <input type="email" placeholder="Enter your email" value={name.email} name="email" onChange={inputEvent}/>
            <br></br>
            <input type="text" placeholder="Enter your number" value={name.number} name="phone" onChange={inputEvent}/>
            <br></br>
            <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
