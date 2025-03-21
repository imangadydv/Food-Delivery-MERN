import React, { useState ,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './pages/Menu';
import About from './pages/About';
import Myorder from './pages/Myorder';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className="pt-16">
      <Navbar  isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>


      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        {!isAuthenticated && (
          <>
            <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<SignupPage />} />
          </>
        )}

        {/* Private Routes */}
        {isAuthenticated && (
          <>
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/myorder" element={<Myorder />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </>
        )}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
