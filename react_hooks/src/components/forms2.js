import React,{useState} from 'react'

export default function forms2() {
const [name,setName] = useState({
    fname:'',
    lname:'',
    password:'',
    email:'',
    phone:""
})
const inputEvent=(event)=>{
        const {value,name} = event.target
        setName((preValue)=>{
            if(name=="fname"){
                return{
                    fname:value,
                    lname:preValue.lname,
                    password:preValue.password,
                    email:preValue.email,
                    phone:preValue.phone
                }
            }else if(name=="lname"){
                return{
                    fname:preValue.fname,
                    lname:value,
                    password:preValue.password,
                    email:preValue.email,
                    phone:preValue.phone
                }
            }
            else if(name=="password"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    password:value,
                    email:preValue.email,
                    phone:preValue.phone
                }
            } else if(name=="email"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    password:preValue.password,
                    email:value,
                    phone:preValue.phone
                }
            } else if(name=="phone"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    password:preValue.password,
                    email:preValue.email,
                    phone:value
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
