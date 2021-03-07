import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function PostDetails(props) {
    const [post,setPost] = useState("");
    let postId = props.history.location.pathname.slice(14, props.history.location.pathname.length);
    console.log(postId)
    let history = useHistory();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>{
            setPost(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    function redirect(e){
        e.preventDefault();
        history.push("/")
    }
  return (
    <div>
          <div class="ui inverted segment">
  <div class="ui inverted secondary menu">
    <a onClick={()=>history.push("/")} class="active item">
      Home
    </a>
    
  </div>
</div>
        <h1 style={{textAlign:"center",fontFamily:"-moz-initial",fontSize:"70px"}}>Post Details</h1>
      <div class="ui card" style={{margin:"auto",marginTop:"40px",width:"50%",height:"500px"}}>
  <div class="content">
      <br></br>
    <div class="header" style={{fontSize:"18px"}}><a>UserId</a>- {post.userId}</div>
    <br></br>
    <div class="header" style={{fontSize:"18px"}}><a>PostId</a>- {post.id}</div>
    <br></br>
    <div class="header" style={{fontSize:"18px"}}><a>Title</a>- {post.title}</div>
    <br></br>
    <div class="header" style={{fontSize:"18px"}}><a>Body</a>- {post.body}</div>
  </div>
  <div class="extra content">
      

    <button onClick={redirect}  class="ui black button">Retun Home</button>
      
  </div>
</div>
    </div>
  );
}
