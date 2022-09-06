import { useContext } from 'react';

import { PostsContext } from '../contexts/postsContext';

import '../App.css';



const Categories = ({ categories }) => {

  const { posts, setPosts } = useContext(PostsContext);


  // need to persist categories options

  const handleCategoryChange = (e) => {

    const filteredPosts = posts.filter(

      (post) => post.category === e.target.value

    );

    setPosts(filteredPosts);
  };



  
  return (

    
    

    <div className="categories-container comp">

      <img src="photo3.jpg" alt='learning' width="250" height="250"></img>
      

      <h2>
        
        
        Choose a category that you want to explore and dig in. Learn more from the different
        blog posts and network with other people in your category. Feel free to leave a comment and drop
        a like after every post you have read.</h2>

        <br></br>




      <label htmlFor="categories"><strong>Choose A Topic </strong>  </label>

      <select name="categories" id="categories" onChange={handleCategoryChange}>

        <option key="all" value={'all'}>

          All
        </option>


        
        {categories.map((category, index) => (

          <option key={index} value={category}>

            {category}

          </option>

        ))}

      </select>


      <form action="/action_page.php">


    <input type="submit" value="Submit"></input>

    </form>
    

      

    </div>
    

  );

};



export default Categories;
