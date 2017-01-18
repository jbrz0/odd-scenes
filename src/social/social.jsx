import s from './social.scss';
import React from 'react';

import SocialOne from '../img/social-01.svg';
import SocialTwo from '../img/social-02.svg';
import SocialThree from '../img/social-03.svg';
import SocialFour from '../img/social-04.svg';

export default class Social extends React.Component {
  render() {
    return (
      <div className={s.socialRoot}>
        <div className={s.socialWrap}>

          <div className={s.iconWrap}>
            <a href="#">
              <img src={SocialOne} alt=""/>
              <div className={s.socialIcon}></div>
            </a>
          </div>

          <div className={s.iconWrap}>
            <a href="#">
              <img src={SocialTwo} alt=""/>
              <div className={s.socialIcon}></div>
            </a>
          </div>

          <div className={s.iconWrap}>
            <a href="#">
              <img src={SocialThree} alt=""/>
              <div className={s.socialIcon}></div>
            </a>
          </div>

          <div className={s.iconWrap}>
            <a href="#">
              <img src={SocialFour} alt=""/>
              <div className={s.socialIcon}></div>
            </a>
          </div>

        </div>
      </div>
    )
  }
}
