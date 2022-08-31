import Feed from './feed';
import Categories from './categories';
import { TEST_POSTS } from '../assets/test-posts';
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const userPosts = [];//TEST_POSTS.filter((post) => post.user); // update this when integrating Users

const categories = [...new Set(userPosts.map((post) => post.category))];

const PrevPosts = () => {

  const [postsdata, setPostsData] = useState([]);
  
  const getPostsData = async () => {
    const { postsdata } = await axios.get(`http://localhost:5000/api/posts`);
    setPostsData(postsdata);
  };

  useEffect(() => {
    // Update the document title using the browser API
     userPosts = [];//TEST_POSTS.filter((post) => post.user); // update this when integrating Users
     getPostsData();
  }, []);

  return (
    <div className="prev-posts-container comp">
      <p>this is the PrevPosts container</p>
      <Categories categories={categories} />
      <Feed posts={postsdata} />
    </div>
  );
};

export default PrevPosts;
