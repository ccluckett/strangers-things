import React, { useEffect, useState } from "react";
import { Header, SignIn, Register, Home } from ".";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const COHORT_NAME = "2303-ftb-et-web-ft";
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const { data } = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
export default Main;
