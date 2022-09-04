import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext({
  posts: [],
  setPosts: () => {},
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  
  const getPostsData = async () => {
    const posts  =  (await axios.get('http://localhost:5000/api/posts')).data;
    setPosts(posts);
  };

  useEffect(() => {
    getPostsData();
    
  }, []);

  const value = { posts, setPosts };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
