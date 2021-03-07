import React from 'react'
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Liked from "./pages/Liked";
import Dislike from "./pages/Dislike";
import PostDetails from "./pages/PostDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/posts/:id" component={Posts}/>
          <Route exact path="/post/details/:id" component={PostDetails}/>
          <Route exact path="/post/likes" component={Liked}/>
          <Route exact path="/post/dislikes" component={Dislike}/>
        </Switch>
      </Router>
    </div>
  )
}

