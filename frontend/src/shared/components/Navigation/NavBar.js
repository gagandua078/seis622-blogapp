import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { Dropdown } from 'react-bootstrap';
// Font awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faEdit,
  faPenToSquare,
  faPerson,
  faSignOutAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
  const auth = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isSticky ? 'sticky-top bg-light' : ''
      } navbar-light`}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src="/logo.svg" alt="logo" width="50" height="50" />
          <span className="p-2">GETYSTORE BLOG</span>
        </a>
        <button
          className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link" onClick={toggleNavbar}>
                Authors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                exact
                className="nav-link"
                onClick={toggleNavbar}
              >
                <FontAwesomeIcon icon={faPerson} /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                exact
                className="nav-link"
                onClick={toggleNavbar}
              >
                <FontAwesomeIcon icon={faAddressCard} /> Contact
              </NavLink>
            </li>
            {auth.isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to="/places/new"
                  className="nav-link"
                  onClick={toggleNavbar}
                >
                  <FontAwesomeIcon icon={faPenToSquare} /> Create
                </NavLink>
              </li>
            )}
            {!auth.isLoggedIn && (
              <li className="nav-item">
                <NavLink to="/auth" className="nav-link" onClick={toggleNavbar}>
                  <button className="btn btn-outline-dark">LOGIN</button>
                </NavLink>
              </li>
            )}
            {auth.isLoggedIn && (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="link"
                      id="profile-dropdown"
                      className="profile-toggle"
                    >
                      <div className="profile-icon">
                        <FontAwesomeIcon icon={faUserCircle} size="2x" />
                        <span className="profile-text">Profile</span>
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        href={`/${auth.userId}/places`}
                        onClick={toggleNavbar}
                      >
                        <FontAwesomeIcon icon={faEdit} /> &nbsp; Posts
                      </Dropdown.Item>
                      <Dropdown.Item href="#logout" onClick={auth.logout}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp; Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
