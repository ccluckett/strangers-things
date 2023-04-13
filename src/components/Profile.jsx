import React, { useEffect, useState } from "react";
import { myData } from "../api";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <div>
      {user.messages ? (
        <div>
          <h1>Messages from other users</h1>
          {user.messages.map((message) => {
            return (
              <div>
                <h3>User:{message.fromUser.username}</h3>
                <h4>Title:{message.post.title}</h4>
                <p>{message.content}</p>
              </div>
            );
          })}
          <h1>Posts from other users</h1>
          {user.posts.map((post) => {
            return (
              <div key={post._id}>
                <h1>{post.title}</h1>
                <h5>{post.location}</h5>
                <p>{post.price}</p>
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
