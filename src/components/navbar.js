import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../assets/images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Reusable handler to refresh if already on the route
  const handleRouteClick = (targetPath) => {
    if (location.pathname === targetPath) {
      window.location.reload();
    }
  };



    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
          setShowNavbar(true); // scrolling up → show
        } else {
          setShowNavbar(false); // scrolling down → hide
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="logo-hamburger-container">
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => handleRouteClick('/')}>Home</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={() => handleRouteClick('/dashboard')}>Dashboard</Link>
        </li>
        <li><Link to="/about" onClick={() => handleRouteClick('/about')}>About Us</Link></li>
      </ul>

      <div className={`nav-buttons ${isOpen ? 'active' : ''}`}>
        <Link to="/login"><button className="login">Login</button></Link>
        <Link to="/signup"><button className="get-started">Get Started</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
