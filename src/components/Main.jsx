import React, { useEffect, useState } from "react";
import { Header, SignIn, Register, Home, Profile, Posts } from ".";
import { Routes, Route } from "react-router-dom";
import { fetchPosts } from "../api";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const { posts } = await fetchPosts(); //Call posts from api folder
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <div>
      <Header token={token} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route
          path="/signin"
          element={
            <SignIn
              token={token}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/register"
          element={<Register setToken={setToken} token={token} />}
        />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </div>
  );
};
export default Main;
