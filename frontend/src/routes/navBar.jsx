import { Outlet, Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  return (
    <div className="App nav-container">
      <Link to="/">Home</Link>{' '}
      <Link to="/auth">Sign-In/Sign-Up</Link>{' '}
      <Link to="/user">My Posts</Link>{' '}
      <Link to="/admin">Admin</Link>{' '}
      <Outlet />
    </div>
  );
};

export default NavBar;
