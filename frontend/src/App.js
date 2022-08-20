import { Routes, Route } from 'react-router-dom';
import Nav from './routes/nav/nav.comp';
import Home from './routes/home/home.comp';
//import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
