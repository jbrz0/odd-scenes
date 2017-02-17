import React from 'react';
import s from './index.scss';
import LazyLoad from 'react-lazyload';

import Menu from './menu/menu.jsx';
import Recent from './recent/recent.jsx';
import Intro from './intro/intro.jsx';
import Wallpapers from './wallpapers/wallpapers.jsx';
import Social from './social/social.jsx';
import Shop from './shop/shop.jsx';
import Footer from './footer/footer.jsx';
import Logo from './img/logo.svg';



export default class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <img src={Logo} className={s.logo} />
        <Intro />
        <LazyLoad height={700} offset={100} once><Recent /></LazyLoad>
        <LazyLoad height={700} offset={100} once><Wallpapers /></LazyLoad>
        <LazyLoad height={700} offset={100} once><Social /></LazyLoad>
        <LazyLoad height={700} offset={100} once><Shop /></LazyLoad>
        <LazyLoad height={700} offset={100} once><Footer /></LazyLoad>
      </div>
    )
  }
}
