import React, { useState } from "react";
import { postMessage } from "../api";

const CreateMessage = ({ post, token, setMessages }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data } = await postMessage(token, post._id, content);
    setMessages(data);
    setContent("");
  };

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
