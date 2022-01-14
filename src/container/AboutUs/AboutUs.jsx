import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans1">We 2 Young and Dumb friends opened this cafe as our dream and as a result, now we are Broke. But still, we would love to spoil you with our services so that you can also be broke like us...</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans1">We started our journey in December 2021 and would just love to see where this cafe takes us. So far, this has been an awesome journey and we would surely like to grow more and more and serve our customers better than ever...</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
