import React from 'react';
import './ServiceDetail.css'
const ServiceDetail = ({ service }) => {
  console.log(service);
  const { picture, name, price, description } = service;
  return (
    <div className="service-container mt-5 mb-3">
      <div className="col ">
        <div classNames="card h-100">
          <img height={300} src={picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Name : {name}</h5>
            <p className="card-text">
              <small>{description}</small>
            </p>
            <h4>{price}</h4>
          </div>
          <div className="">
            <button className="w-100 py-3  border-0 button-pos">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;