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
      <p>Feel free to leave a comment and drop
      a like after every post you have read.</p>
    </div>
  );
};

export default Feed;
