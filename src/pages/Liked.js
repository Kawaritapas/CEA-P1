import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import LikedCard from "../components/LikedCard"
export default function Liked() {
    const [postId,setPosts] = useState([]);
    const liked = useSelector((state) => state.posts.like);
    liked.toString();

    useEffect(() => {
        let arr = [];
        for(let i=0;i<liked.length;i++){
        if(Number(liked[i])){
            arr.push(liked[i])
        }}
        setPosts(arr)
       
    }, [])
    return (
        <div className="ui container">
            <h1 style={{textAlign:"center",fontFamily:"-moz-initial",fontSize:"70px"}}>Liked Posts</h1>
            {
                postId?(postId.map(function(post){
                   return <LikedCard postId={post}/>
                })):(<p>loading...</p>)
            }
        </div>
    )
}
