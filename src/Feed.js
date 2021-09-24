import React, { useState, useEffect } from "react";import "./Feed.css";
import Post from './Post';
import FlipMove from "react-flip-move";

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dry-dusk-90160.herokuapp.com/api/post')
    .then(response => response.json())
    .then(data => setPosts(data.data))
  }, []);

  return (
    <div className="feed">
      
      <div className="feed__header">
        <h2>Inicio</h2>
      </div>
      {/* Header */}

      
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.name}
            content={post.content}
            owner_email={post.owner_email}
            comment_counter={post.comment_counter}
            like_counter={post.like_counter}
            dislike_counter={post.dislike_counter}
            createdAt={post.createdAt}
          />
        ))}
      </FlipMove>
      {/* Post */}
    </div>
  )
}

export default Feed
