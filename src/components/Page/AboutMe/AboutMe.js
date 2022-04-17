import React from 'react';
import me from '../../../images/rasel2.jpg'
import './AboutMe.css'
const AboutMe = () => {
  return (
    <div className="about-container">
      <div>
        <h3 className="font-style text-center">Name : Rasel Rana</h3>
        <img src={me} alt="" />
      </div>
      <div>
        <p>
          My only goal now is to be a good developer,As long as I am inside this
          course I will try my best to get the maximum result,am ready to do as
          much as it takes time and as much effort as it takes InshaAllah
        </p>
      </div>
    </div>
  );
};

export default AboutMe;