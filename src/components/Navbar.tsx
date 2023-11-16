// components/Navbar.js
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
function Navbar() {
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
          <Image src="/assets/logo.svg" alt="Logo" height={40} width={40} />
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
              <a href="/" className="nav-link" onClick={toggleNavbar}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link" onClick={toggleNavbar}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link" onClick={toggleNavbar}>
                Blog
              </a>
            </li>
            {/* Add more items as needed */}
            <li className="nav-item">
              <button className="btn btn-outline-dark" onClick={toggleNavbar}>
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
