import s from './intro.scss';
import React from 'react';

import Whale from '../img/whale.png';
import Octopus from '../img/octopus.png';

var Scroll  = require('react-scroll');
var Element    = Scroll.Element;

export default class Intro extends React.Component {
  render() {
    return (

      <div className={s.introRoot}>
      <Element name="info">
        <img src={Octopus} className={s.octopus} />
        <div className={s.introWrap}>
          <div className={s.introCard}>
            <h3>visual jargon</h3>
            <p>Odd Scenes is an digital media project using
             illustrations, web and film media. Find work and updates
             over the web on Instagram, Tumblr, Twitter or Facebook.
             More projects coming soon. for inquiries email
            &nbsp;<a href="mailto:oddscenes@gmail.com">oddscenes@gmail.com</a></p>
          </div>
          <img src={Whale} className={s.whale} />
        </div>

      </Element>
      </div>
    )
  }
}
