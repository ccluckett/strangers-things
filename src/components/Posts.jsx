import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateMessage from "./CreateMessage";
import "./Posts.css";

const Posts = ({ posts, user, token }) => {
  console.log(token);
  const [show, setShow] = useState(false);
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
              {user._id !== post.author._id ? (
                <>
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    {show ? "Close Message" : "Create Message"}
                  </button>
                  {show ? <CreateMessage post={post} token={token} /> : ""}
                </>
              ) : (
                ""
              )}
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
