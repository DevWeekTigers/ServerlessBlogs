import Profile from '../components/profile'
import PrevPosts from '../components/prev-posts';
import NewPost from '../components/new-post';

const UserPage = () => {
  return(
    <div className="user-container page">
      <p>this is the user-container</p>
      <Profile />
      <PrevPosts />
      <NewPost />
    </div>
  )
};

export default UserPage;
