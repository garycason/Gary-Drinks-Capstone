// src/components/NavBar/NavBar.jsx

import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
        Home
      </NavLink>
      <NavLink to="/drinks" className={({ isActive }) => isActive ? "active-link" : ""}>
        All Drinks
      </NavLink>
      <NavLink to="/add-drink" className={({ isActive }) => isActive ? "active-link" : ""}>
        Add New Drink
      </NavLink>
      {/* You can add more navigation links here */}
    </nav>
  );
};

export default NavBar
