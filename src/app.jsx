import React from 'react';
import s from './index.scss';

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
        <Recent />
        <Wallpapers />
        <Social />
        <Shop />
        <Footer />
      </div>
    )
  }
}
