import React from 'react';

import './MainFooter.css';

const MainFooter = () => {
  return (
    <div className="footer-container">
      <footer className="py-5 footer-margin">
        <div className="row">
          <div className="col-6 col-md-2 mb-3 text-center">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/about" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/contact" className="nav-link p-0 text-muted">
                  Contact
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 text-center">
            <h5>Connect With Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Youtube
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 text-center">
            <h5>Account</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Readlist
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  My Account
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  History
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Logout
                </a>
              </li>
              <li className="nav-item mb-2">
                {/* <a href="/" className="nav-link p-0 text-muted"> */}
                <a href="/about" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/contact" className="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3 d-flex justify-content-center align-items-center">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>GETYSTORE © 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="/">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="/instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="/">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="/facebook"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="/">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="/facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
