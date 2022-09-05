import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext({
  posts: [],
  setPosts: () => {},
  categories: [],
  setCategories: () => {},
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([])
  
  const getPostsData = async () => {
    const posts  =  (await axios.get('http://localhost:5000/api/posts')).data;
    setPosts(posts);
  };

  const getCategories = async () => {
    const categories = (await axios.get('http://localhost:5000/api/posts/categories')).data;
    console.log('inside getCategories - categories :>> ', categories);
    setCategories(categories);
  }

  useEffect(() => {
    getPostsData();
    getCategories();
  }, []);

  const value = { posts, setPosts, categories };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
