import React from 'react';
import s from './wallpapers.scss';
import Face from '../img/face.png';
import Ball from '../img/uncompressed/ball.png';

import Modal from 'react-modal';
import Close from '../img/close-modal.svg';

// Make lg for download and preview sizes
import Wallpaper1 from '../img/wallpapers/octopus-sm.png';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(53, 0, 250, 0.86)',
  },
  content: {
    zIndex: '10',
    border: 'none',
    background: 'transparent',
    padding: '0'
  }
};

export default class Wallpapers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      modalOne: false,
      modalTwo: false
    };

    this.closeModal = this.closeModal.bind(this);
  }

  openModalOne() { this.setState({ modalOne: true}); }
  openModalTwo() { this.setState({ modalTwo: true}); }

  closeModal() {
    this.setState({
      modalOne: false, modalTwo: false, modalThree: false,
     });
  }


  render() {
    return (
      <div className={s.wallpaperWrap}>


        {/* Modals Start */}

        <Modal isOpen={this.state.modalOne} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.wallpaperModalWrap}>
            <div className={s.wallpaperModalWrapInner}>
              <img src={Wallpaper1} className={s.wallpaperImg} />
              <h3>Download:</h3>
              <a href="#" className={s.downloadBtn}>
                2560 x 1440
              </a>
            </div>
          </div>

          <button className={s.closeModal} onClick={this.closeModal}>
            <img src={Close} />
          </button>
        </Modal>

        <Modal isOpen={this.state.modalTwo} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          {/* <img src={Wallpaper1} /> */}
          Wallpaper 2
          <button className={s.closeModal} onClick={this.closeModal}>
            <img src={Close} />
          </button>
        </Modal>
        {/* Modals End */}




        <img src={Ball} className={s.ball} />

        <h2>Wallpapers</h2>
        <ul className={s.wallpapers}>
          <a href="#" onClick={this.openModalOne.bind(this)}>
            <li>Octopus</li>
          </a>
          <a href="#" onClick={this.openModalTwo.bind(this)}>
            <li>Wallpaper #2</li>
          </a>
          <a href="#">
            <li>Wallpaper #3</li>
          </a>
          <a href="#">
            <li>Wallpaper #4</li>
          </a>
          <a href="#">
            <li>Wallpaper #5</li>
          </a>
          <a href="#">
            <li>Wallpaper #6</li>
          </a>
          <a href="#">
            <li>Wallpaper #7</li>
          </a>
        </ul>

        <img src={Face} className={s.face} />
      </div>
    )
  }
}
