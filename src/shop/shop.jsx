import React from 'react';
// import Slider from 'rc-slider';
import s from './shop.scss';
import Modal from 'react-modal';

// import _ from 'lod'
// import ModalComponent from '../modal/modal.jsx';
// import List from 'list.js';




// require('rc-slider/assets/index.css');
// import Search from '../img/search.svg';
import Close from '../img/close-modal.svg';

import ImgProductOne from '../img/shop/shop-1.jpg';
import ImgProductTwo from '../img/shop/shop-2.jpg';
const ProductOne = { backgroundImage: "url(" + ImgProductOne + ")", }
const ProductTwo = { backgroundImage: "url(" + ImgProductTwo + ")", }

// const handleStyle = {
//   height: '1px',
//   color: 'red'
// };

const customStyles = {
  overlay: {
    // backgroundColor: 'rgba(53, 0, 250, 0.66)',
    backgroundColor: 'rgba(53, 0, 250, 0.86)',
  },
  content: {
    zIndex: '10',
    border: 'none',
    background: 'transparent',
    padding: '0'
  }
};

export default class Shop extends React.Component {

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
      <div className={s.shopRoot}>

        {/* Modals Start */}

        <Modal isOpen={this.state.modalOne} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.leftModalBody}><img src={ImgProductOne} /></div>
          <div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
            <h2>Shirt Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placera</p>
            <span className={s.price}>$20.00</span>
            <ul>
              <li>Feature 1</li>
              <li>Made with cotton etc</li>
              <li>Feature #3</li>
              <li>New additional feature #4</li>
            </ul>
            <a href="#" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
          </div></div>
          <button className={s.closeModal} onClick={this.closeModal}>
            <img src={Close} />
          </button>
        </Modal>

        <Modal isOpen={this.state.modalTwo} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
          <div className={s.leftModalBody}><img src={ImgProductTwo} /></div>
          <div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
            <h2>Shirt Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placera</p>
            <span className={s.price}>$20.00</span>
            <ul>
              <li>Feature 1</li>
              <li>Made with cotton etc</li>
              <li>Feature #3</li>
              <li>New additional feature #4</li>
            </ul>
            <a href="#" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
          </div></div>
          <button className={s.closeModal} onClick={this.closeModal}>
            <img src={Close} />
          </button>
        </Modal>



        {/* Modals End */}

        <div className={s.shopWrap}>

          <div className={s.sidebar}>
            {/* <img src={Search} className={s.searchIcon} /> */}
            {/* <input placeholder="Search" className={s.searchBar} /> */}

            <a href="https://society6.com/oddscenes">
              <h3 className={s.sidebarHeader}>SEE MORE ON society6.com</h3>
            </a>

            <h3 className={s.categoryHeader}>Categories</h3>
            <ul className={s.shopList}>
              <a href="https://society6.com/oddscenes/tshirts">
                <li>T-Shirts</li>
              </a>
              <a href="https://society6.com/oddscenes/hoodies">
                <li>Hoodies</li>
              </a>
              <a href="https://society6.com/oddscenes/pillows">
                <li>Pillows</li>
              </a>
              <a href="https://society6.com/oddscenes/cases">
                <li>iPhone Cases</li>
              </a>
              <a href="https://society6.com/oddscenes/wall-clocks">
                <li>Clocks</li>
              </a>
              <a href="https://society6.com/oddscenes/prints">
                <li>Prints</li>
              </a>
              <a href="https://society6.com/oddscenes/bags">
                <li>Bags</li>
              </a>
            </ul>

            {/* <h3>Price Filter ($)</h3>

            <Slider
              range={true}
              min={10}
              max={100}
              style={handleStyle}
             /> */}

          </div>

          <div className={s.shop}>

            <div className={s.shopGrid} style={ProductOne}>
              <a href="#" onClick={this.openModalOne.bind(this)}></a>
            </div>
            <div className={s.shopGrid} style={ProductTwo}>
              <a href="#" onClick={this.openModalTwo.bind(this)}></a>
            </div>
            <div className={s.shopGrid}>
              <a href="#"></a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>

            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>

            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>

            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>
            <div className={s.shopGrid}>
              <a href="#">
                {/* CLOTHES */}
              </a>
            </div>

          </div>

        </div>
      </div>
    )
  }
}
