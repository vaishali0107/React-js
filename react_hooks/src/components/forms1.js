import React,{useState} from 'react'

export default function forms1() {
const [name,setName] = useState({
    fname:"",
    lname:"",
    password:""
})
    const inputEvent=(event)=>{
       const  value = event.target.value;
        const name = event.target.name;
        setName((preValue)=>{
            if(name=="fname"){
                return{
                    fname:value,
                    lname:preValue.lname,
                    password:preValue.password
                }
            }else if(name=="lname"){
                return{
                    fname:preValue.fname,
                    lname:value,
                    password:preValue.password
                }
            }
            else if(name=="password"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    password:value
                }
            }
        })
    }

      const onSubmit=(event)=>{
        event.preventDefault();
        alert('Form submitted');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <h1>Hello {name.fname} {name.lname} {name.password}</h1>
            <input type="text" placeholder="Enter your firstname" value={name.fname} name="fname" onChange={inputEvent}/>
            <br/>
            <input type="text" placeholder="Enter your lastname" value={name.lname} name="lname" onChange={inputEvent}/>
            <br/>
            <input type="text" placeholder="Enter your Password" value={name.password} name="password" onChange={inputEvent}/>
            <br></br>
            <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
