import React, { useEffect, useState } from "react";
import {
  Header,
  SignIn,
  Register,
  Home,
  Profile,
  Posts,
  SignOut,
  CreatePost,
} from ".";
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
  console.log(posts);
  return (
    <div>
      <Header
        token={token}
        setToken={setToken}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route
          path="/signin"
          element={
            <SignIn
              tokenOnState={token}
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
        <Route path="/posts" element={<Posts posts={posts} />}></Route>
        <Route
          path="/signout"
          element={
            <SignOut setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/createpost"
          element={
            <CreatePost token={token} posts={posts} setPosts={setPosts} />
          }
        />
      </Routes>
    </div>
  );
};
export default Main;
