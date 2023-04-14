import React, { useState } from "react";
import { postMessage } from "../api";

const CreateMessage = ({ post, token }) => {
  console.log(token);
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(post._id);
    let resposne = await postMessage(token, post._id, content);
    console.log(resposne);
  };
  console.log(post);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></input>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default CreateMessage;
