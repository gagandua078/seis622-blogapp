import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

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
                ALL USERS
              </NavLink>
            </li>
            {auth.isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to={`/${auth.userId}/places`}
                  className="nav-link"
                  onClick={toggleNavbar}
                >
                  MY PLACES
                </NavLink>
              </li>
            )}
            {auth.isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to="/places/new"
                  className="nav-link"
                  onClick={toggleNavbar}
                >
                  ADD PLACE
                </NavLink>
              </li>
            )}
            {!auth.isLoggedIn && (
              <li className="nav-item">
                <NavLink to="/auth" className="nav-link" onClick={toggleNavbar}>
                  AUTHENTICATE
                </NavLink>
              </li>
            )}
            {auth.isLoggedIn && (
              <li className="nav-item">
                <button className="btn btn-outline-dark" onClick={auth.logout}>
                  LOGOUT
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
