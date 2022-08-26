import Post from './post';
import Categories from './categories';

import '../App.css';

const PrevPosts = () => {
  return (
    <div className="prev-posts-container comp">
      <p>this is the PrevPosts container</p>
      <Categories />
      <Post />
    </div>
  );
};

export default PrevPosts;
