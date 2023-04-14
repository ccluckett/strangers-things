import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makePost } from "../api";

const CreatePost = ({ token, setPosts, posts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("[On Request]");
  const [willDeliver, setWillDeliver] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postObj = {
      //Create my post
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: willDeliver,
    };

    const { data } = await makePost(token, postObj);
    console.log(data);
    if (data.post) {
      setPosts([data.post, ...posts]);
      console.log(posts);
      navigate("/profile");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <label>Description</label>
        <input
          required
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <label>Price</label>
        <input
          required
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
        <label>Will Deliver</label>
        <input
          type="checkbox"
          onClick={() => {
            setWillDeliver(!willDeliver);
          }}
        ></input>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
