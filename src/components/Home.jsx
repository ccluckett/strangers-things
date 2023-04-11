import React from "react";

const Home = ({ posts }) => {
  return (
    <div>
      {posts ? (
        posts.map((post) => {
          return (
            <div key={post.author._id}>
              <h2>{post.author.username}</h2>
              <h3>{post.title}</h3>
              <h4>{post.price}</h4>
              <p>{post.description}</p>
            </div>
          );
        })
      ) : (
        <h1>...Loading</h1>
      )}
    </div>
  );
};

export default Home;
