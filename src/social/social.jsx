import s from './social.scss';
import React from 'react';

import SocialOne from '../img/social-01.svg';
import SocialTwo from '../img/social-02.svg';
import SocialThree from '../img/social-03.svg';
import SocialFour from '../img/social-04.svg';

var Scroll  = require('react-scroll');
var Element    = Scroll.Element;

export default class Social extends React.Component {
  render() {
    return (
      <Element name="connect">
      <div className={s.socialRoot}>
        <div className={s.socialWrap}>

          <div className={s.iconWrap}>
            <a href="http://fb.com/oddscenes">
              <img src={SocialOne} alt=""/>
              <div className={s.socialIcon}></div>
            </a>
          </div>

          <div className={s.iconWrap}>
            <a href="http://instagram.com/oddscenes">
              <img src={SocialTwo} alt=""/>
              <div className={s.socialIcon}></div>
            </a>
          </div>

          <div className={s.iconWrap}>
            <a href="http://oddscenes.tumblr.com">
              <img src={SocialThree} alt=""/>
              <div className={s.socialIcon}></div>
            </a>
          </div>

          <div className={s.iconWrap}>
            <a href="http://twitter.com/oddscenes">
              <img src={SocialFour} alt=""/>
              <div className={s.socialIcon}></div>
            </a>
          </div>

        </div>
      </div>
    </Element>
    )
  }
}
