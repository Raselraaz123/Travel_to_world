import React from 'react';
import useServices from '../../../hooks/useServices';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css'
const Services = () => {
  const [services] = useServices();
  return (
    <div className='services-container'>
    
      {
        services.map(service => <ServiceDetail
          key={service.id}
          service={service}
        ></ServiceDetail>)
      }
    </div>
  );
};

export default Services;