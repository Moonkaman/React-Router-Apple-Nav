import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const NavBar = props => {
  return (
    <nav>
      <div className="nav-items">
        {props.navItems.map((navItem, index) => (
          <NavLink key={navItem + index} to={`/${navItem}`}>
            {navItem}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string)
};

export default NavBar;
