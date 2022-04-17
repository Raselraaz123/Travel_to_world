import React from 'react';
import not from '../../../images/not-found-free.png'
import './NotFound.css'
const NotFound = () => {
  return (
    <div>
      <h2 className="text-center mt-3 mb-3 font-style">Page Not Found</h2>
      <div className='not-img-style'>
        <img src={not} alt="" />
      </div>
    </div>
  );
};

export default NotFound;