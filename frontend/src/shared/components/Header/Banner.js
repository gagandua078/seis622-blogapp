import React from 'react';

const Banner = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark text-white py-5">
      <div className="container" style={{ paddingBottom: '60px' }}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">World Class Blogging Application</h1>
            <p className="lead">Explore our latest offerings and services.</p>
            <a href="#" className="btn btn-primary btn-lg">
              Read the topmost articles here &raquo;
            </a>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a2a4f0f1e4f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
