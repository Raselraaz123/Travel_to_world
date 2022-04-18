import React from 'react';
import './ServiceDetail.css'
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from 'react-router-dom';




const ServiceDetail = ({ service }) => {
  console.log(service);
  const { id, picture, name, price, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
  navigate(`/services/${id}`);
    };
  return (
    <div className="service-container mt-3 mb-3">
      <div className="col ">
        <div classNames="card h-100">
          <img height={300} src={picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Name : {name}</h4>
            <p className="card-text">
              <small>{description}</small>
            </p>
            <h5> Price : $ {price}</h5>
          </div>
          <div className="">
            <Link to="/checkout">
              <button
                onClick={() => navigateToServiceDetail(id)}
                className="w-100 py-3  border-0 button-pos"
              >
                Book Now
                <ArrowRightIcon className="icon-style text-blue-500" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;