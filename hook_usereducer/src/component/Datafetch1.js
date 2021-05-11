import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function Datafetch1() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")
    const [post,setPost] = useState({})

    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            setLoading(false)
            setError("")
            setPost(res.data)
        })
           .catch(err=>{
            setLoading(false)
            setPost({})
            setError(err)
        }
        )
    },[])
    return (
        <div>
            {loading?"Loading...":post.title}
            {error?error:"Something went wrong"}
        </div>
    )
}
