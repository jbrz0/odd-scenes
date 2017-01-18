import s from './menu.scss';
import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <ul className={s.menu}>
          <a href="#"><li>
            <div className={s.menuLine}></div>
            Info
          </li></a>
          <a href="#"><li>
            <div className={s.menuLine}></div>
            Feed
          </li></a>
          <a href="#"><li>
            <div className={s.menuLine}></div>
            Wallpapers
          </li></a>
          <a href="#"><li>
            <div className={s.menuLine}></div>
            Connect
          </li></a>
          <a href="#"><li>
            <div className={s.menuLine}></div>
            Shop
          </li></a>
        </ul>
      </div>
    )
  }
}
