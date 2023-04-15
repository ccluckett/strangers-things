import React from "react";
import SearchForm from "./SearchForm";


const Home = ({ posts }) => {
  return (
    <div>
       <div>
       <div>
         <SearchForm />
       </div>

       </div>
      {posts.length ? (
        posts.map((post) => {
          return (
            <div key={post._id} className="container">
              <h2 className="username">{post.author.username}</h2>
              <h3 className="title">{post.title}</h3>
              <em className="price">{post.price}</em>
              <p className="description">{post.description}</p>
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
