import React, { useState/* , useContext */ } from 'react';
/* import { PostsContext } from '../contexts/postsContext'; */
import Feed from '../components/feed';
import Categories from '../components/categories';

//import { TEST_POSTS } from './../assets/test-posts.js';
import logo from '../assets/images/logo512.png';
import '../App.css';

const HomePage = () => {
/*   const { posts, categories } = useContext(PostsContext); */
  const [spin, setSpin] = useState(false);

  /* const categories = [...new Set(posts.map((post) => post.category))]; */

  return (
    <div className="home-page page">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => {
            setSpin(!spin);
          }}
          spin={`${spin}`}
        />
        <div>
          <p>Tiger Blogs!</p>{' '}
        </div>
        <Categories /* categories={categories} */ />
        <Feed /* posts={posts} */ />
      </header>
    </div>
  );
};

export default HomePage;
