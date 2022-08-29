//import NavBar from './routes/navBar';
import HomePage from './routes/homePage';
import AuthPage from './routes/authPage';
import UserPage from './routes/userPage';
import AdminPage from './routes/adminPage';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './routes/navBar';


function App() {
  
  return (
    
     <>
     <Navbar />
      <Routes>
         <Route index element={<HomePage />} />
         <Route path="/user" element={<UserPage />} />
         <Route path="/auth" element={<AuthPage />} />
         <Route path="/admin" element={<AdminPage />} />
      </Routes>
     </>
      
    
  );

}

export default App;
