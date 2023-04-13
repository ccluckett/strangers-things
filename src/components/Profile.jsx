import React, { useEffect, useState } from "react";
import { myData } from "../api";

const Profile = ({ token }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getuserData = async () => {
      const result = await myData(); //When API doc works pass in the token from state
      setData(result);
    };
    getuserData();
  }, []);
  console.log(data, "this is my result");
  return (
    <div>
      {data.messages ? (
        <div>
          <h1>Messages from other users</h1>
          {data.messages.map((message) => {
            return (
              <div key={message._id}>
                <h3>User:{message.fromUser.username}</h3>
                <h4>Title:{message.post.title}</h4>
                <p>{message.content}</p>
              </div>
            );
          })}
          <h1>Posts from other users</h1>
          {data.posts.map((post) => {
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
