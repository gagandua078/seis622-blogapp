import React from 'react';
import blogPost from '../../../assets/blogPost.svg';
import './Banner.css'; // Your CSS file for styling

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4">World Class Blogging Application</h1>
              <p className="lead">Explore our latest offerings and services.</p>
              <a href="#" className="btn btn-primary btn-lg">
                Read the top most articles here &raquo;
              </a>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={blogPost} alt="" className="img-fluid smaller-svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
