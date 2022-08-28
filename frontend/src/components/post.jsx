import '../App.css';

const Post = ({ post }) => {
  const { title, category,/* numViews, */  likes, description } = post;
  
  return(
    <div className="post-container comp">
      <p>this is a post component</p>
      <h1 className='post title'>Title: {title}</h1>
      <h3 className='post user'>User: user.displayName</h3>
      <p className='description'>Post: {description}</p>
      <span className='likes' >Likes: {likes.length || '0'}</span>{' '}
      <span className='category'>Category: {category}</span>
     {/*  {' '} <span className='views'>Views: {numViews || '0'}</span> */}
    </div>
  )
}

export default Post;
