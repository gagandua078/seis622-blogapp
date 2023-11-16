import React from 'react';

const HomeCards = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="text-center mb-4">
          <h2>Latest Blog Posts</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Blog"
              />
              <div className="card-body">
                <h5 className="card-title">Blog Title 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Blog"
              />
              <div className="card-body">
                <h5 className="card-title">Blog Title 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Blog"
              />
              <div className="card-body">
                <h5 className="card-title">Blog Title 3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
