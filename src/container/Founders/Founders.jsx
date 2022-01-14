import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Founders.css';

const Founders = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.founders} height="1000px" alt="founders_image" />
    </div>
    <div className="app__wrapper_info" style={{marginLeft:"10px"}}>
      <SubHeading title="A word from our founders" />
      <h1 className="headtext__cormorant">The people who made this dream a reality...</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans1">We had a dream of our own cafe. Then one day, we decided that it's gonna be now or never... </p>
        </div>
        <p className="p__opensans1">And now, we have our dream turned into reality in front of us and we really are happy about our dream coming true...</p>
      </div>

      <div className="app__chef-sign">
        <p>Tosit Roy & Subhajit Mukherjee </p>
        <br />
        <p className="p__opensans">Founders</p>
      </div>
    </div>
  </div>
);

export default Founders;
