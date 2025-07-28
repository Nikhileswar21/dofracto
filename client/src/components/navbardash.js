import './navbardash.css';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png'; // replace with your profile image
import { useState } from 'react';
import { FaSearch,FaShoppingCart, FaTicketAlt, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';

const UserNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className="nav-links">
          <li><a href="/businesslisting">Business Listings</a></li>
          <li><a href="/huse">Huse Circle</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        {/* Search box */}
                 

        <div className="search-wrapper">
  <input type="text" className="search-box" placeholder="Search..." />
  <span className="search-icon-end"><FaSearch /></span>
</div>

        {/* Avatar */}
        <img src={avatar} alt="Profile" className="avatar-icon" />

        {/* Three-dot menu */}
        <div className="menu-wrapper">
          <div className="three-dots" onClick={() => setShowMenu(!showMenu)}>
            &#8943; {/* ⋯ horizontal dots */}
            </div>

          {showMenu && (
  <ul className="dropdown-menu-dash">
    <li>
      <FaShoppingCart className="dropdown-icon" />
      <a href="/purchase">Purchase</a>
    </li>
    <li>
      <FaTicketAlt className="dropdown-icon" />
      <a href="/tickets">Tickets</a>
    </li>
    <li>
      <FaChartLine className="dropdown-icon" />
      <a href="/activity">Activity</a>
    </li>
    <li>
      <FaCog className="dropdown-icon" />
      <a href="/settings">Settings</a>
    </li>
    <li onClick={() => {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/";
    }}>
      <FaSignOutAlt className="dropdown-icon" />
      Logout
    </li>
  </ul>
)}

        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
