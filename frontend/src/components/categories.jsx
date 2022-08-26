import { useState } from 'react';
import '../App.css';

const Categories = () => {
  const testPosts = [
    { title: 'Responsive design', category: 'css' },
    { title: 'Form elements', category: 'html' },
    { title: 'Bootstrap it!', category: 'css' },
    { title: 'State in HTML', category: 'html' },
  ];
  const [posts, setPosts] = useState(testPosts);

  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div className="categories-container comp">
      <p>this is the categories container</p>
      <label htmlFor="categories">categories: </label>
      <select name="categories" id="categories">
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
        }
      </select>
    </div>
  );
};

export default Categories;
