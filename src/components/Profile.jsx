import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../api";
const Profile = ({ user, posts, setPosts, token }) => {
  const navigate = useNavigate();
  console.log(posts);

  const handleDelete = async (postId) => {
    console.log(postId);
    await deletePost(token, postId);
    setPosts([...user.posts.filter((post) => post.id !== post._id)]);
  };
  return (
    <div>
      {user.messages ? (
        <div>
          <h1>Messages made</h1>
          {user.messages.map((message) => {
            return (
              <div>
                <h3>User:{message.fromUser.username}</h3>
                <h4>Title:{message.post.title}</h4>
                <p>{message.content}</p>
              </div>
            );
          })}
          <h1>Posts made</h1>
          {user.posts.map((post) => {
            return (
              <div key={post._id}>
                <h1>{post.title}</h1>
                <h5>{post.location}</h5>
                <p>{post.price}</p>
                <button
                  onClick={() => {
                    handleDelete(post._id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Profile;
