import { Outlet } from 'react-router-dom';
import '../../App.css';

const Nav = () => {
  return (
    <div className="App nav-container">
    <div>this, right here, is going to be the most fabulous navigation bar you've ever seen</div>
    <Outlet />
    </div>
  )
};

export default Nav;
