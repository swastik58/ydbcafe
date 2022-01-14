import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.kitchen} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="A word from YDB's kitchen" />
      <h1 className="headtext__cormorant">What we believe in...</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans1">When you run a kitchen, no matter how crazy and chaotic it gets, you have to be the calm one. </p>
        </div>
        <p className="p__opensans1">You cannot show any sign of fear - the guests pick up on it. The beauty of this kitchen, though, is that everybody helps everybody.</p>
      </div>

      <div className="app__chef-sign">
        <p>Young. Dumb. Broke.</p>
        <p className="p__opensans">#YDB</p>
      </div>
    </div>
  </div>
);

export default Chef;
