import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Posts.css";

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn btn-outline-danger create-post"
        onClick={() => {
          navigate("/createpost");
        }}
      >
        Create Post
      </button>

      {posts ? (
        posts.map((post) => {
          return (
            <div key={post._id} className="container">
              <h2 className="username">{post.author.username}</h2>
              <h3 className="title">{post.title}</h3>
              <em className="price">{post.price}</em>
              <p className="description">{post.description}</p>
            </div>
          );
        })
      ) : (
        <h1>...Loading</h1>
      )}
    </div>
  );
};

export default Posts;
