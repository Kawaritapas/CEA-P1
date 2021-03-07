import React, { useState } from "react";
import { deletePosts } from "../redux/actions/postAction";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import {likePost,dislikePost} from "../redux/actions/postAction"
import axios from "axios";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);
  const [open2, set2Open] = React.useState(false);
  const [like, setliked] = useState([]);
  const [dislike, setDisliked] = useState([]);
  const [comment, setComment] = useState("");
  let history = useHistory();
  let dispatch = useDispatch();
  function deletePost(e) {
    e.preventDefault();
    dispatch(deletePosts(e.target.value));
    setOpen(true);
  }
  function infoClicked(e) {
    e.preventDefault();
    history.push(`/post/details/${e.target.value}`);
  }
  function comments(e) {
    e.preventDefault();
    let postId = e.target.value;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => [console.log(err)]);
    console.log(comment);
    set2Open(true);
  }
  function liked(event) {
    event.preventDefault();
    
      dispatch(likePost(event.target.value))
   
  }

  function disliked(event) {
    event.preventDefault();
    
      dispatch(dislikePost(event.target.value))
   
    
  }

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header></Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <h1>Deleted Sucessfully</h1>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Home"
            labelPosition="right"
            icon="arrow right"
            onClick={() => history.push("/")}
            positive
          />
        </Modal.Actions>
      </Modal>

      <Modal
        onClose={() => set2Open(false)}
        onOpen={() => set2Open(true)}
        open={open2}
      >
        <Modal.Header> Comments</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>
              {comment ? (
                comment.map(function (comment) {
                  return (
                    <div class="ui list">
                      <div class="item">
                        <i class="map marker icon"></i>
                        <div class="content">
                          <a class="header">{comment.email}</a>
                          <div class="description">{comment.body}.</div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>loading...</p>
              )}
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Close Comments"
            labelPosition="right"
            icon="close"
            onClick={() => set2Open(false)}
            negative
          />
        </Modal.Actions>
      </Modal>
      <div
        class="ui  card"
        style={{
          width: "600px",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <div class="content">
          <div class="header">Post Title</div>
          <p>{props.post.title}</p>
        </div>
        <div class="content">
          <h4 class="ui sub header" style={{ color: "blue" }}>
            Description
          </h4>
          <div class="ui small feed">
            <div class="event">
              <div class="content">
                <div class="summary">
                  <p>{props.post.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="extra content">
          <button
            value={props.post.id}
            onClick={infoClicked}
            class="ui primary button"
          >
            Show More
          </button>
          <button
            value={props.post.id}
            onClick={deletePost}
            class="ui red button"
          >
            Delete
          </button>
          <button
            value={props.post.id}
            onClick={comments}
            class="ui right floated green button"
          >
            Comments
          </button>
        </div>
        <div class="ui buttons">
          <button
            class="ui positive button"
            onClick={liked}
            value={props.post.id}
          >
            Like
          </button>
          <div class="or"></div>
          <button class="ui  button" onClick={disliked} value={props.post.id}>
            Dislike
          </button>
        </div>
      </div>
    </>
  );
}
