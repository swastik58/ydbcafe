import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans1">MB 71, Mahisbathan Rd, Sector V, Kolkata, West Bengal 700102</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0', fontSize: '30px'}}>when can you visit us ??? </p>
        <p className="p__opensans1">Mon - Sun : 08:30 am - 10:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}><a href="https://www.google.com/maps/place/YDB+Young+Dumb+Broke/@22.5782057,88.4428172,18.79z/data=!4m12!1m6!3m5!1s0x3a02751a77deb76b:0x2a2df5badd381da9!2sYDB+Young+Dumb+Broke!8m2!3d22.5780706!4d88.4432165!3m4!1s0x3a02751a77deb76b:0x2a2df5badd381da9!8m2!3d22.5780706!4d88.4432165" target="_blank" rel="noreferrer">Visit Us</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} height="700px" width="600px" alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
