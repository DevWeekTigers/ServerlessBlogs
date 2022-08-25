import Post from './post';
import Search from './search';

import '../App.css';

const PrevPosts = () => {
  return (
    <div className="prev-posts-container comp">
      <p>this is the PrevPosts container</p>
      <Search />
      <Post />
    </div>
  );
};

export default PrevPosts;
