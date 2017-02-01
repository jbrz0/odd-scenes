import s from './menu.scss';
import React from 'react';

var Scroll  = require('react-scroll');
var Link       = Scroll.Link;
// var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class Menu extends React.Component {

  componentDidMount() {
    // Events.scrollEvent.register('begin', function(to, element) {
    //   console.log("begin", arguments);
    // });
    // Events.scrollEvent.register('end', function(to, element) {
    //   console.log("end", arguments);
    // });
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }

  render() {
    return (
      <div>
        <ul className={s.menu}>
          <Link to="info" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            <li>
              <div className={s.menuLine}></div>
              Info
            </li>
          </Link>
          <Link to="feed" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            <li>
              <div className={s.menuLine}></div>
              Feed
            </li>
          </Link>
          <Link to="wallpapers" spy={true} smooth={true} offset={-180} duration={500} onSetActive={this.handleSetActive}>
            <li>
              <div className={s.menuLine}></div>
              Wallpapers
            </li>
          </Link>
          <Link to="connect" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
            <li>
              <div className={s.menuLine}></div>
              Connect
            </li>
          </Link>
          <Link to="shop" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            <li>
              <div className={s.menuLine}></div>
              Shop
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}
