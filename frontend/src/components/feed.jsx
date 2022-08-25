import Post from './post';
import Search from './search';

import '../App.css';

const Feed = () => {
  return(
    <div className="feed-container comp">
      <p>this is the feed container</p>
      <Search />
      <Post />
    </div>
  )
}

export default Feed;
