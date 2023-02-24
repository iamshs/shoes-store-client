import React,{ useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Toggle from '../../Components/Toggle';
import '../../styles/Navbar.css'
import logo from "../../assets/logo.png"  

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
      <Link to="/" className="brand-name">
        <img src={logo}  alt="" />
       <h2> Shoes-store</h2>
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/everything" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Everything</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-btn">Login</NavLink>
          </li>
          <li> <Toggle /> </li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;