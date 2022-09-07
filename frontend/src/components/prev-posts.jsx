import React, { useContext } from 'react';
import { UsersContext } from '../contexts/usersContext';

import Feed from './feed';
import Categories from './categories';
import '../App.css';

const PrevPosts = () => {
  const { currentUser } = useContext(UsersContext);

  return (
    <div className="prev-posts-container comp">
      <p>User's previous posts</p>
<div className='posts-container'>
        <Categories />
        <Feed user={ currentUser }/>
</div>
    </div>
  );
};

export default PrevPosts;
