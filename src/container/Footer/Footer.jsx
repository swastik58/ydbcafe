import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans1">MB 71, Mahisbathan Rd, Sector V, Kolkata, West Bengal 700102</p>
        <br />
        <p className="p__opensans"><a href="tel:7908843815">+91 7908843815</a></p>
        <p className="p__opensans"><a href="tel:7908679081">+91 7908679081</a></p>
      </div>

      <div className="app__footer-links_logo">
        <h1>Young. Dumb. Broke. </h1>
        <br />
        <p className="p__opensans1">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/youngdumbbroke_ydb-106782685198276/" target="_blank" rel="noreferrer"><FiFacebook /></a>
          <a href="https://www.instagram.com/young.dumb.broke_ydb/?utm_medium=copy_link" target="_blank" rel="noreferrer"><FiInstagram /> </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans1">We are here for you everyday : </p>
        <br />
        <p className="p__opensans1">From 08:30 am - 10:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 YDB. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;