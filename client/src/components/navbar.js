import './navbar.css';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className="nav-links">
          <li><a href="/business">Business Listings</a></li>
          <li><a href="/huse">Huse Circle</a></li>
          <li><a href="/contact">Contact Us</a></li>
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
