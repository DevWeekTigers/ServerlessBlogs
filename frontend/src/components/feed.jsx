import React, { useContext }from 'react';
import { PostsContext } from '../contexts/postsContext';
import Post from './post';

import '../App.css';

const Feed = (/* { posts } */) => {
  const { selectedPosts } = useContext(PostsContext);

  return (
    <div className="feed-container comp">
      <p>this is the feed container</p>
      {selectedPosts && selectedPosts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
};

export default Feed;
