import React, { useContext }from 'react';
import { PostsContext } from '../contexts/postsContext';
import Post from './post';

import '../App.css';

const Feed = ({ user }) => {

  let { selectedPosts } = useContext(PostsContext);

  if (user) {
    selectedPosts = selectedPosts.filter(post => post.user.id === user._id)
  };

  return (
    <div className="feed-container comp">
      <p>Feed:</p>
      {selectedPosts && selectedPosts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
};

export default Feed;
