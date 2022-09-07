import React from 'react';
import '../App.css';

const Post = ({ post }) => {
  const { title, category,/* numViews, */ user,  likes, description } = post;
  
  return(
    <div className="post-container comp">
      <div className='post title'>Title: {title}</div>
      <div className='post user'>User: {user.email}</div>
      <p className='description'>Post: {description}</p>
      <span className='likes' >Likes: {likes ? likes.length : '0'}</span>{' '}
      <span className='category-name'>Category: {category}</span>
     {/*  {' '} <span className='views'>Views: {numViews || '0'}</span> */}
    </div>
  )
}

export default Post;
