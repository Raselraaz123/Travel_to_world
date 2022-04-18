import React from 'react';
import useServices from '../../../hooks/useServices';
import Banner from '../Banner/Banner';
import './Home.css'
import HomePageService from '../HomePageService/HomePageService';

const Home = () => {
  const [services] = useServices();
  const frist3Item = services.slice(0, 3)
 
  return (
    <div>
      <Banner></Banner>

      <div>
        <h2 className='mt-5  text-center font-style services-color'>Our Services</h2>
        <div className="services-container">
          {frist3Item.map((sameItem) => (
            <HomePageService
              key={sameItem.id}
              sameItem={sameItem}
            ></HomePageService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;