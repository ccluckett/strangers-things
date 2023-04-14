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
  CreateMessage,
} from ".";
import { Routes, Route } from "react-router-dom";
import { fetchPosts } from "../api";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const getPosts = async () => {
      const { posts } = await fetchPosts(); //Call posts from api folder
      setPosts(posts);
    };
    getPosts();
  }, []);
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
              setToken={setToken}
              setIsLoggedIn={setIsLoggedIn}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/register"
          element={<Register setToken={setToken} token={token} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              setPosts={setPosts}
              token={token}
              posts={posts}
              setUser={setUser}
            />
          }
        ></Route>
        <Route
          path="/posts"
          element={
            <Posts
              posts={posts}
              user={user}
              token={token}
              messages={messages}
              setMessages={setMessages}
            />
          }
        ></Route>
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
        <Route path="/editpost" element={<CreateMessage token={token} />} />
      </Routes>
    </div>
  );
};
export default Main;
