import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

export default function Example1() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/" />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:postid" component={FullPost} />
    </BrowserRouter>
  );
}

test

function Nav() {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/posts">
        <li>Posts</li>
      </Link>
    </ul>
  );
}

function Posts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, []);
  return (
    <div>
      {posts.map(post => (
        <h3
          onClick={() => props.history.push(`${props.match.url}/${post.id}`)}
          key={post.id}>
          {post.title}
        </h3>
      ))}
    </div>
  );
}

function FullPost(props) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.postid}`)
      .then(res => res.json())
      .then(post => setPost(post));
  }, [props.match.params.postid]);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
