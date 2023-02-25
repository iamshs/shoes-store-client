import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import '../../styles/Nav.css'
import {GiHamburgerMenu} from "react-icons/gi"
import logo from "../../assets/logo.png";
import ToggleTheme from '../../Components/ToggleTheme'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
  const handleShowNavbar = () => {
    setIsOpen(isOpen => !isOpen)
  }

 
  return (
    <nav   className="navbar">
      <div className="container">
        <div className="logo">
        <img src={logo} alt="" />
        <h2> Shoes-store</h2>
        </div>
        <div className='theme-toggle'>
            <ToggleTheme />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
         <GiHamburgerMenu size={25} />
        </div>
        <div className={`nav-elements  ${isOpen && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/everything">Everything</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav