import React from 'react';
import Profile from '../components/profile'
import PrevPosts from '../components/prev-posts';
import NewPost from '../components/new-post';

const UserPage = () => {
  return(
    <div className="user-page page">
      <p>User page</p>
      <Profile />
      <NewPost />
      <PrevPosts />
    </div>
  )
};

export default UserPage;
