import React from 'react';
import './Banner.css'
import photo1 from '../../../images/banner/australia.jpg'
import photo2 from '../../../images/banner/chile.png'
import photo3 from '../../../images/banner/germany.jpg'

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active carousel-img-style">
            <img src={photo1} className="d-block w-100" alt="..." />
          </div>
          className="d-block w-100"
          <div className="carousel-item carousel-img-style">
            <img src={photo2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousel-img-style">
            <img src={photo3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;