import './navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className="nav-links">
          <li><Link to="/business">Business Listings</Link></li>
          <li><Link to="/huse">Huse Circle</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/login" className="get-started-btn">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
