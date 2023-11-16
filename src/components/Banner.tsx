import React from 'react';

import bannerImage from '../../public/assets/banner/blog-banner.jpg';
import Image from 'next/image';

const banner = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid bg-dark text-white py-5">
        <div
          className="container"
          style={{ paddingTop: '60px', paddingBottom: '60px' }}
        >
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4">World Class Blogging Application</h1>
              <p className="lead">Explore our latest offerings and services.</p>
              <a href="#" className="btn btn-primary btn-lg">
                Read the topmost articles here &raquo;
              </a>
            </div>
            <div className="col-md-6">
              <Image
                src={bannerImage}
                className="img-fluid rounded"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
