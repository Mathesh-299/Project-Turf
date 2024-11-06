import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminLogin from './admin/AdminLogin';
import Navbar from './component/Navbar';
import UserLogin from './login/UserLogin';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import Login from './page/Login';
import Sports from './sports/Sports';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
