import React, { useContext } from 'react';
import { PostsContext } from '../contexts/postsContext';
import Category from './category';
import '../App.css';

const Categories = () => {
  const { posts, categories, setSelectedPosts } = useContext(PostsContext);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    const filteredPosts = posts.filter((post) => post.category === selected);
    selected === 'All'
      ? setSelectedPosts(posts)
      : setSelectedPosts(filteredPosts);
  };

  return (
    <div className="categories-container comp">
      <p>Categories: </p>
      {categories.map((category, index) => (
        <Category
          key={index}
          value={category}
          handleClick={handleCategoryChange}
        >
          {category}
        </Category>
      ))}
      <p>Choose a category that you want to explore and dig in.</p>
    </div>
  );
};

export default Categories;
