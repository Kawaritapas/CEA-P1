import { useSelector, useDispatch } from "react-redux";
import React, {  useState } from "react";
import { searchPost, fetchPosts } from "../redux/actions/postAction";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";


import Card from "../components/Card";
export default function Posts(props) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [created,setCreated] = useState("");
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");

  let history = useHistory()
  const [search, setSearch] = useState("");
  const posts = useSelector((state) => state.posts);
  let dispatch = useDispatch();
  console.log(posts);
  function submittedd(e) {
      e.preventDefault()
 
    let Id = props.history.location.pathname.slice(
      7,
      props.history.location.pathname.length
    );
    dispatch(fetchPosts(Id));
    setTimeout(() => {
      posts.posts?(posts.posts.data.map(function (post) {
            if (post.title.trim(" ").includes(search)) {
              console.log(post);
              dispatch(searchPost(post));
            }
          }))
        : (console.log("not found"));
    }, 1000);
  }
  function changed(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  function handleclick(e){
    e.preventDefault();
   
    setOpen2(true)
  }

  function handle2(e){
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => setCreated(json));
  }

  function titlechange(e){
    e.preventDefault();
    setTitle(e.target.value)
  }
  function bodychange(e){
    e.preventDefault();
    setBody(e.target.value)
  }
  return (
    <div>
        <div class="ui inverted segment">
  <div class="ui inverted secondary menu">
    <a onClick={()=>history.push("/")} class="active item">
      Home
    </a>
    <button onClick={()=>history.push("/post/likes")}  className="ui green button">Liked Posts</button>
        <button onClick={()=>history.push("/post/dislikes")} className="ui orange button">DisLiked Posts</button>
        <button onClick={handleclick} className="ui yellow button">Create Posts</button>
  
  </div>

      <Modal
        onClose={() => setOpen2(false)}
        onOpen={() => setOpen2(true)}
        open={open2}
      >
        <Modal.Header>Create Post</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <form onSubmit={handle2} className="ui form">
              <label>title</label>
              <input onChange={titlechange} type="text" name="title"></input>
              <label>body</label>
              <input  onChange={bodychange} type="text" name="title"></input>
      <button className="ui primary button">Create</button>
            </form>
            <br></br>
            <br></br>
            <p>Important: resource will not be really updated on the server but it will be faked as if(We are using mock data)</p>
             {created.title?(<h3>Output:</h3>):(<p></p>)}
             {created.title?(<h2>Created Title: <span style={{color:"blue"}}>{created.title}</span></h2>):(<p></p>)}
             {created.title?(<h2>Created body: <span style={{color:"blue"}}>{created.body}</span></h2>):(<p></p>)}
             {created.title?(<h2>Created userid:<span style={{color:"blue"}}>{created.userId}</span> </h2>):(<p></p>)}
  
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="close"
            labelPosition="right"
            icon="arrow right"
            onClick={() => setOpen2(false)}
            negative
          />
        </Modal.Actions>
      </Modal>
</div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "-moz-initial",
          fontSize: "70px",
        }}
      >
        Posts
      </h1>

      <form onSubmit={submittedd} className="ui form">
        <input
          onChange={changed}
          placeholder="search by title"
          type="text"
          name="search"
          style={{ width: "300px", margin: "auto", display: "block" }}
        />
        <br></br>
        <button
          style={{ margin: "auto", display: "block" }}
          className="ui black button"
          type="submit"
        >
          Search
        </button>
      </form>
      

      {posts.posts ? (
        posts.posts.data.map(function (post) {
          return <Card key={post.id} post={post} />;
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
