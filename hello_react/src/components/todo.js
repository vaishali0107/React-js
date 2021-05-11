import React,{useState} from 'react'
export default function todo() {
    const [item,setItem] = useState("");
    const [item1,setItem1] = useState([]);

    const inputEvent=(event)=>{
        setItem(event.target.value);
    }
    const clicked=(e)=>{
        e.preventDefault();
        setItem1((preVal)=>{
            return [...preVal,item]
        });
        setItem("");
    }
    const deleteItem=(id)=>{
       setItem1((oldVal)=>{
            return oldVal.filter((arrElem,index)=>{
                return index!=id
            })
        })
    }

    return (
        <div className="main_div">
            <div className="center-div">
                <br/>
                    <h1>TODO list</h1>
                <br/>  
                <input type="text" placeholder="Enter item" value={item}
                onChange={inputEvent}
                /> 
                <button onClick={clicked}>+</button> 
                <br/>
                <br/>
                <ul>
                    {item1.map((curval,index)=>{
                        return(
                            <div key={index}>
                            <div className="cross_sign_div">
                            <i class="fas fa-times-circle" aria-hidden="true" onClick={()=>{deleteItem(index)}}></i>
                            <li>{curval}</li>
                            
                            </div>
                            </div>
                        )
                    })}
                </ul>


            </div>
        </div>
    )
}
