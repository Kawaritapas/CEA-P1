import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import DisLikedCard from "../components/LikedCard"
export default function Dislike() {
    const [postId,setPosts] = useState([]);
    const disliked = useSelector((state) => state.posts.dislike);
    disliked.toString();

    useEffect(() => {
        let arr = [];
        for(let i=0;i<disliked.length;i++){
        if(Number(disliked[i])){
            arr.push(disliked[i])
        }}
        setPosts(arr)
       
    }, [])
    return (
        <div className="ui container">
            <h1 style={{textAlign:"center",fontFamily:"-moz-initial",fontSize:"70px"}}>DisLiked Posts</h1>
            {
                postId?(postId.map(function(post){
                   return <DisLikedCard postId={post}/>
                })):(<p>loading...</p>)
            }
        </div>
    )
}
