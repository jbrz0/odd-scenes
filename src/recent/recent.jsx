import s from './recent.scss';
import React from 'react';
var Scroll  = require('react-scroll');
var Element    = Scroll.Element;

import gridOne from '../img/recent/vaporwave.png';
import gridTwo from '../img/recent/city.png';
import gridThree from '../img/recent/burgers.png';
import gridFour from '../img/recent/mouse.png';
import gridFive from '../img/recent/pixel.png';
import gridSix from '../img/recent/spacepicker.png';
import gridSeven from '../img/recent/eyeball.png';
import gridEight from '../img/recent/face.png';
import gridNine from '../img/recent/octopus.png';
import gridTen from '../img/recent/woven.png';
import gridEleven from '../img/recent/jargon.png';
import gridTwelve from '../img/recent/squid.png';
const imgOne = { backgroundImage: "url(" + gridOne + ")", }
const imgTwo = { backgroundImage: "url(" + gridTwo + ")", }
const imgThree = { backgroundImage: "url(" + gridThree + ")", }
const imgFour = { backgroundImage: "url(" + gridFour + ")", }
const imgFive = { backgroundImage: "url(" + gridFive + ")", }
const imgSix = { backgroundImage: "url(" + gridSix + ")", }
const imgSeven = { backgroundImage: "url(" + gridSeven + ")", }
const imgEight = { backgroundImage: "url(" + gridEight + ")", }
const imgNine = { backgroundImage: "url(" + gridNine + ")", }
const imgTen = { backgroundImage: "url(" + gridTen + ")", }
const imgEleven = { backgroundImage: "url(" + gridEleven + ")", }
const imgTwelve = { backgroundImage: "url(" + gridTwelve + ")", }

export default class Recent extends React.Component {
  render() {
    return (
      <div><Element name="feed">

        <div className={s.recentWrap}>
          <div className={s.grid} style={imgOne}></div>
          <div className={s.grid} style={imgTwo}></div>
          <div className={s.grid} style={imgThree}></div>
          <div className={s.grid} style={imgFour}></div>
          <div className={s.grid} style={imgFive}></div>
          <div className={s.grid} style={imgSix}></div>

          <div className={s.gridTall}>
            <div className={s.tallStretch}>
              <div className={s.tallInner}><div>
                <h3>Recent Works</h3>
                <p>See some of the latest creations, for more check
                  out the profile pages below. Many of the pieces are
                  also available as T-shirts or other merch.</p>
                  <a href="http://oddscenes.tumblr.com">
                  <button className={s.recentBtn}>VISIT TUMBLR</button>
                  </a>
              </div></div>
            </div>
          </div>

          <div className={s.grid} style={imgSeven}></div>
          <div className={s.grid} style={imgEight}></div>
          <div className={s.grid} style={imgNine}></div>
          <div className={s.gridShift} style={imgTen}></div>
          <div className={s.gridShift} style={imgEleven}></div>
          <div className={s.gridSpace}></div>
          <div className={s.gridShift} style={imgTwelve}></div>

        </div>
      </Element></div>
    )
  }
}
