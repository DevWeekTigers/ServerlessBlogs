import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../config';

export const PostsContext = createContext({
  posts: [],
  setPosts: () => {},
  categories: [],
  setCategories: () => {},
  selectedPosts: [],
  setSelectedPosts: () => {},
});


export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([])
  const [selectedPosts, setSelectedPosts] = useState([]);
  
  const getPostsData = async () => {
    console.log(API_ENDPOINT);
    
    const allPosts  =  (await axios.get(API_ENDPOINT + '/api/posts')).data;
    setPosts(allPosts);
    setSelectedPosts(allPosts);
  };

  const getCategories = async () => {
    const categories = (await axios.get(API_ENDPOINT + '/api/posts/categories')).data;
/*     console.log('inside getCategories - categories :>> ', categories); */
    setCategories(categories);
  }

  useEffect(() => {
    getPostsData();
    getCategories();
  }, []);

  const value = { posts, setPosts, categories, selectedPosts, setSelectedPosts };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
