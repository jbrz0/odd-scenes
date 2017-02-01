import React from 'react';
import s from './wallpapers.scss';
import Face from '../img/face.png';
import Ball from '../img/uncompressed/ball.png';

import Modal from 'react-modal';
import Close from '../img/close-modal.svg';

var Scroll  = require('react-scroll');
var Element    = Scroll.Element;

// import BallLink from '../img/uncompressed/ball.png';
// const Ball = {backgroundImage: 'url(' + BallLink + ')'}

import WallpaperLinkOne from '../img/wallpapers/lg/face-melt.png';
import WallpaperLinkTwo from '../img/wallpapers/lg/faces.png';
import WallpaperLinkThree from '../img/wallpapers/lg/monster.png';
import WallpaperLinkFour from '../img/wallpapers/lg/octopus.png';
import WallpaperLinkFive from '../img/wallpapers/lg/space-picker.png';
import WallpaperLinkSix from '../img/wallpapers/lg/visual-jargon.png';
import WallpaperLinkSeven from '../img/wallpapers/lg/waffle-cat.png';

// Make lg for download and preview sizes
import Wallpaper1 from '../img/wallpapers/face-melt.png';
import Wallpaper2 from '../img/wallpapers/faces.png';
import Wallpaper3 from '../img/wallpapers/monster.png';
import Wallpaper4 from '../img/wallpapers/octopus.png';
import Wallpaper5 from '../img/wallpapers/space-picker.png';
import Wallpaper6 from '../img/wallpapers/visual-jargon.png';
import Wallpaper7 from '../img/wallpapers/waffle-cat.png';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(53, 0, 250, 0.86)',
  },
  content: {
    zIndex: '10',
    border: 'none',
    background: 'transparent',
    padding: '0',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }
};

export default class Wallpapers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      modalOne: false,
      modalTwo: false,
      modalThree: false,
      modalFour: false,
      modalFive: false,
      modalSix: false,
      modalSeven: false,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  openModalOne() { this.setState({ modalOne: true}); }
  openModalTwo() { this.setState({ modalTwo: true}); }
  openModalThree() { this.setState({ modalThree: true}); }
  openModalFour() { this.setState({ modalFour: true}); }
  openModalFive() { this.setState({ modalFive: true}); }
  openModalSix() { this.setState({ modalSix: true}); }
  openModalSeven() { this.setState({ modalSeven: true}); }

  closeModal() {
    this.setState({
      modalOne: false, modalTwo: false, modalThree: false,
      modalFour: false, modalFive: false, modalSix: false,
      modalSeven: false,
     });
  }


  render() {
    return (
      <Element name="wallpapers">
        <div className={s.wallpaperWrap}>

        {/* <div className={s.ballBg} style={Ball}></div> */}


        {/* Modals Start */}

        <Modal isOpen={this.state.modalOne} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.wallpaperModalWrap}><div className={s.wallpaperModalWrapInner}>
            <img src={Wallpaper1} className={s.wallpaperImg} />
            <a href={WallpaperLinkOne} className={s.downloadBtn}>Download</a>
          </div></div>
          <button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
        </Modal>

        <Modal isOpen={this.state.modalTwo} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.wallpaperModalWrap}><div className={s.wallpaperModalWrapInner}>
            <img src={Wallpaper2} className={s.wallpaperImg} />
            <a href={WallpaperLinkTwo} className={s.downloadBtn}>Download</a>
          </div></div>
          <button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
        </Modal>

        <Modal isOpen={this.state.modalThree} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.wallpaperModalWrap}><div className={s.wallpaperModalWrapInner}>
            <img src={Wallpaper3} className={s.wallpaperImg} />
            <a href={WallpaperLinkThree} className={s.downloadBtn}>Download</a>
          </div></div>
          <button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
        </Modal>

        <Modal isOpen={this.state.modalFour} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.wallpaperModalWrap}><div className={s.wallpaperModalWrapInner}>
            <img src={Wallpaper4} className={s.wallpaperImg} />
            <a href={WallpaperLinkFour} className={s.downloadBtn}>Download</a>
          </div></div>
          <button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
        </Modal>

        <Modal isOpen={this.state.modalFive} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.wallpaperModalWrap}><div className={s.wallpaperModalWrapInner}>
            <img src={Wallpaper5} className={s.wallpaperImg} />
            <a href={WallpaperLinkFive} className={s.downloadBtn}>Download</a>
          </div></div>
          <button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
        </Modal>

        <Modal isOpen={this.state.modalSix} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.wallpaperModalWrap}><div className={s.wallpaperModalWrapInner}>
            <img src={Wallpaper6} className={s.wallpaperImg} />
            <a href={WallpaperLinkSix} className={s.downloadBtn}>Download</a>
          </div></div>
          <button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
        </Modal>

        <Modal isOpen={this.state.modalSeven} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.wallpaperModalWrap}><div className={s.wallpaperModalWrapInner}>
            <img src={Wallpaper7} className={s.wallpaperImg} />
            <a href={WallpaperLinkSeven} className={s.downloadBtn}>Download</a>
          </div></div>
          <button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
        </Modal>


        {/* Modals End */}


        <img src={Ball} className={s.ball} />



        <h2>Wallpapers</h2>
        <ul className={s.wallpapers}>
          <a href="#" onClick={this.openModalOne.bind(this)}>
            <li>Portrait Melt</li>
          </a>
          <a href="#" onClick={this.openModalTwo.bind(this)}>
            <li>Faces</li>
          </a>
          <a href="#" onClick={this.openModalThree.bind(this)}>
            <li>Monster</li>
          </a>
          <a href="#" onClick={this.openModalFour.bind(this)}>
            <li>Octopus</li>
          </a>
          <a href="#" onClick={this.openModalFive.bind(this)}>
            <li>Space Picker</li>
          </a>
          <a href="#" onClick={this.openModalSix.bind(this)}>
            <li>Visual Jargon</li>
          </a>
          <a href="#" onClick={this.openModalSeven.bind(this)}>
            <li>Waffle Cat</li>
          </a>
        </ul>

        <img src={Face} className={s.face} />

      </div></Element>
    )
  }
}
