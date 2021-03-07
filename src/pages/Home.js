import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import {fetchPosts} from "../redux/actions/postAction";
export default function Home() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  },[]);
  const users = useSelector((state) => state.users);
 

  const history = useHistory();
  function postClicked(e){
    e.preventDefault();
    dispatch(fetchPosts(e.target.value))
    history.push(`/posts/${e.target.value}`)
  }

  let user = users.users ? (
    users.users.data.map(function (user) {
     return <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.company.name}</td>
          <td>

    <button className = "ui primary button" value={user.id} onClick={(postClicked)}>
                Posts
              </button>
         </td>

        </tr>
      </tbody>
    })
  ) : (
    <p>loading...</p>
  );
  return (
  <div >
       <div class="ui inverted segment">
  <div class="ui inverted secondary menu">
    <a onClick={()=>history.push("/")} class="active item">
      <img style={{width:"100px"}} src="cea2.jpg"></img>-Project
    </a>
  </div>
</div>
      <h1 style={{textAlign:"center",fontFamily:"-moz-initial",fontSize:"70px"}}>Users</h1>
    <br></br>   
        <table class="ui collapsing selectable inverted  celled table" style={{margin:"auto",width:"60%"}}>
                <thead>
                  <tr>
                    <th className="single line">Id</th>
                    <th>User Name</th>
                    <th>Company Name</th>
                    <th>Blog posts</th>
                  </tr>
                </thead>
                {user}
              </table>
      </div>
  )
}
