import { useState } from 'react';
import Feed from '../components/feed';
import Categories from '../components/categories';

import { TEST_POSTS } from './../assets/test-posts.js';
import logo from '../assets/images/logo512.png';
import '../App.css';

const HomePage = () => {
  const [spin, setSpin] = useState(false);

  const categories = [...new Set(TEST_POSTS.map((post) => post.category))];

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
          <p>this is home page</p>{' '}
          <p>where the most mind bloggling blog posts will be</p>
        </div>
        <Categories categories={categories} />
        <Feed posts={TEST_POSTS} />
      </header>
    </div>
  );
};

export default HomePage;
