import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="A cafe to create new memories" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans1" style={{ margin: '0.5rem 0 0.5rem 0' }}>A cafe to enjoy your coffee slowly and away from the city rush...</p>
      <p className="p__opensans1" style={{ margin: '0.2rem 0 0.5rem 0' }}>A cafe to spend a good evening time with friends over snacks and drinks...</p>
      <p className="p__opensans1" style={{ margin: '0.2rem 0 0.5rem 0' }}>A cafe to try out different dishes and figure out the best ones to have them once again...</p>
      <p className="p__opensans1" style={{ margin: '0.2rem 0 2rem 0' }}>A cafe to regenerate your energy after a long and tiring day's work...</p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} height="800px" width="100px" alt="header_img" />
    </div>
  </div>
);

export default Header;
