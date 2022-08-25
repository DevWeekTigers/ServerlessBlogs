import { useState } from 'react';
import Feed from '../components/feed';
import logo from '../assets/images/logo512.png';
import '../App.css';

const HomePage = () => {
  const [spin, setSpin] = useState(false);

  return (
    <div className="home-container page">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => {
            setSpin(!spin);
          }}
          spin={`${spin}`}
        />
        <div>this is where the most mind bloggling blog posts will be</div>
        <Feed />
      </header>
    </div>
  );
};

export default HomePage;
