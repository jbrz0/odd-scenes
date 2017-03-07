import s from './footer.scss';
import React from 'react';
import Menu from '../menu/menu.jsx';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={s.footerWrap}>
        <div className={s.footerWrapInner}>
          <div className={s.footerInfo}>
            <h2>ODD SCENES</h2>
            <p>2017 - oddscenes.com</p>
          </div>
          <Menu className={s.footerMenu} />
        </div>
      </div>
    )
  }
}
