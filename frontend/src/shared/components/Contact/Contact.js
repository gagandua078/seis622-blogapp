import React from 'react';
import contactImage from '../../../assets/contact.jpg';
import './Contact.css'; // Your CSS file for Contact component styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-banner">
        <div className="contact-banner-image">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-banner-text">
          <h3>Email Us!</h3>
        </div>
        <ul className="contact-list">
          <li className="contact-item">
            <span className="contact-icon">&#9993;</span>
            <a href="mailto:webmaster@example.com">Gagan Deep Singh</a>
          </li>
          <li className="contact-item">
            <span className="contact-icon">&#9993;</span>
            <a href="mailto:webmaster@example.com">Kristina Stern</a>
          </li>
          <li className="contact-item">
            <span className="contact-icon">&#9993;</span>
            <a href="mailto:webmaster@example.com">Jamaal Mohamud</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
