import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';
import pdf from './YDBmenu.pdf';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your wallet" />
      <h1 className="headtext__cormorant">What's on your table???</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Continentals</p>
        <div className="app__specialMenu_menu_items">
          {data.continentals.map((continental, index) => (
            <MenuItem key={continental.title + index} title={continental.title} price={continental.price} description={continental.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.gallery11} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Sizzlers</p>
        <div className="app__specialMenu_menu_items">
          {data.sizzlers.map((sizzler, index) => (
            <MenuItem key={sizzler.title + index} title={sizzler.title} price={sizzler.price} />
          ))}
        </div>
      </div>
    </div>
    <p className="p__opensans1" style={{color: 'white'}}>Feeling downie ??? Just order a brownie..😉😉</p>

    {/* Other menu parts */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Mojitos</p>
        <div className="app__specialMenu_menu_items">
          {data.mojitos.map((mojito, index) => (
            <MenuItem key={mojito.title + index} title={mojito.title} price={mojito.price} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Shakes</p>
        <div className="app__specialMenu_menu_items">
          {data.shakes.map((shake, index) => (
            <MenuItem key={shake.title + index} title={shake.title} price={shake.price} />
          ))}
        </div>
      </div>
    </div>
    <p className="p__opensans1" style={{color: 'white'}}>But wait... Thats not all we have to offer. Click on the button below and get to choose from a more wider variety of foods and beverages...</p>
    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button"><a href={pdf} target="_blank" rel="noreferrer">View More</a></button>
    </div>
  </div>
);

export default SpecialMenu;
