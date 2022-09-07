import React, { useState, useContext } from 'react';
/* import { PostsContext } from '../contexts/postsContext'; */
import { UsersContext } from '../contexts/usersContext';
import Feed from '../components/feed';
import Categories from '../components/categories';

//import { TEST_POSTS } from './../assets/test-posts.js';
import logo from '../assets/images/logo512.png';
import '../App.css';

const HomePage = () => {
  const { currentUser } = useContext(UsersContext);
  /*   const { posts, categories } = useContext(PostsContext); */
  const [spin, setSpin] = useState(false);

  /* const categories = [...new Set(posts.map((post) => post.category))]; */

  const greet = currentUser.firstName
    ? `, ${currentUser.firstName}`
    : ' to Tiger Blogs';

  return (
    <div className="home-page page">
      <header className="App-header">
        <div>
          <h1>Welcome{greet}</h1>{' '}
          <p>
            Find the most updated content on your favorite topic and explore.
            Learn more from the different blog posts and network with people who
            share your interests.
          </p>
          <p>Snuggle up with the Tiger!</p>{' '}
        </div>
      </header>
      <div className="posts-container">
        <Categories /* categories={categories} */ />
        <Feed /* posts={posts} */ />
      </div>
    </div>
  );
};

export default HomePage;
