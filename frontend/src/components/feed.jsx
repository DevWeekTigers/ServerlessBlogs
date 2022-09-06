import Post from './post';


import '../App.css';


const Feed = ({ posts }) => {
  
  return (
  
    <div className="feed-container comp">
      <h1 style={{color: 'white'}}>Blog Posts</h1>

      <p style="font-family: ">This is the Feed container</p>

      {posts.map((post, idx) => (

        <Post key={idx} post={post} />

      ))}

    </div>

    

  );

};

export default Feed;
