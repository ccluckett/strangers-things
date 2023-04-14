import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../api";
const Profile = ({ user, token }) => {
  const [userPost, setUserPost] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (postId) => {
    console.log(postId);
    await deletePost(token, postId);
    setUserPost(user.posts.filter((post) => post.active === true)); //Run only whe the delete button is clicked
  };
  useEffect(() => {
    {
      user.posts
        ? setUserPost(user.posts.filter((post) => post.active === true))
        : null;
    } //Run the first time
  }, []);

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
          {userPost.map((post) => {
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
