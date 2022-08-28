import { Outlet, Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  return (
    <div className="App">
      <div className="nav-container">
        <Link to="/">Home</Link>{' '}
        <Link to="/auth">Sign-In</Link>{' '}
        <Link to="/user">User</Link>{' '}
        <Link to="/admin">Admin</Link>{' '}
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
