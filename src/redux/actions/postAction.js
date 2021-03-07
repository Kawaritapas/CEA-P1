import {USERS , POSTS , ERRORS,POST, LIKE,DISLIKE} from "../types";
import axios from "axios";
export const fetchPosts=(id)=>(dispatch)=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(res=>{
        dispatch({
            type:POSTS,
            payload:res
        })
    }).catch(err=>{
        dispatch({
            type:ERRORS,
            payload:err
        })
    })
}
export const fetchPost=(id)=>(dispatch)=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        dispatch({
            type:POSTS,
            payload:res
        })
    }).catch(err=>{
        dispatch({
            type:ERRORS,
            payload:err
        })
    })
}
export const deletePosts=(id)=>(dispatch)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        console.log(res)
    }).catch(err=>{
        dispatch({
            type:ERRORS,
            payload:err
        })
    })
}
export const searchPost = (data)=>(dispatch)=>{
        let posts={
            data:[data]
        }
        console.log(posts)
        dispatch({
            type:POSTS,
            payload:posts
        })
    
}

export const likePost = (data)=>(dispatch) =>{
    dispatch({type:LIKE,payload:data})
}

export const dislikePost = (data)=>(dispatch) =>{
   
    dispatch({type:DISLIKE,payload:data})
}