import React, { useState, useEffect } from 'react';

const App = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
    fetch('https://animechan.vercel.app/api/random')
       .then((response) => response.json())
       .then((quote) => {
          console.log(quote);
          setPosts(quote);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);


 return (
  <div className="posts-container">
     {posts.map((post) => {
        return (
           <div className="post-card" key={post.anime}>
              <h2 className="post-title">{post.character}</h2>
              <p className="post-body">{post.quote}</p>
              <div className="button">
              <div className="delete-btn">Delete</div>
              </div>
           </div>
        );
     })}
  </div>
  );
};

export default App;
