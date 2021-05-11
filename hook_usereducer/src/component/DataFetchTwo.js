import React,{useReducer,useEffect} from 'react'
import axios from "axios"

const initialValue={
    loading:true,
    error:"",
    post:{}
}
const reducer = (state,action)=>{
    switch(action.type){
        case "Fetch_success":
            return{
                loading:false,
                error:"",
                post:action.payload
            }
        case "Fetch_error":
            return{
                loading:false,
                error:"something went wrong",
                post:{}
            } 
        default:
            return state       
    }
}
export default function DataFetchTwo() {
    const [state,dispatch] = useReducer(reducer,initialValue);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
          dispatch({type:"Fetch_success",payload:res.data})
       })
          .catch(err=>{
          dispatch({type:"Fetch_error"})
       }
       )
   },[])
   return (
       <div>
           {state.loading?"Loading...":state.post.title}
           {state.error?error:"Something went wrong"}
       </div>
   )
}