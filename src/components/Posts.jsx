import React from "react";
import { useNavigate } from "react-router-dom";

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/createpost");
        }}
      >
        Create Post
      </button>
      {posts ? (
        posts.map((post) => {
          return (
            <div key={post.author._id} className="container">
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
