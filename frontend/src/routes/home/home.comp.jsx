import logo from '../../assets/images/logo512.png'; //'./logo.svg';
import '../../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>this is where the most earth shattering blog posts will be</div>
      </header>
    </div>
  );
};

export default Home;
