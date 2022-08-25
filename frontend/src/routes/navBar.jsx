import { Outlet, Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  return (
    <div className="App">
      <div className="nav-container">
        <Link to="/">Home</Link>{' '}
        <Link to="/auth">Sign-In/Sign-Up</Link>{' '}
        <Link to="/user">My Posts</Link>{' '}
        <Link to="/admin">Admin</Link>{' '}
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
