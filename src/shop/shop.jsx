import React from 'react';
import s from './shop.scss';
import Modal from 'react-modal';
var Scroll  = require('react-scroll');
var Element    = Scroll.Element;

import Close from '../img/close-modal.svg';
import ImgProductOne from '../img/shop/shop-1.jpg';
import ImgProductTwo from '../img/shop/shop-2.jpg';
import ImgProductThree from '../img/shop/shop-3.jpg';
import ImgProductFour from '../img/shop/shop-4.jpg';
import ImgProductFive from '../img/shop/shop-5.jpg';
import ImgProductSix from '../img/shop/shop-6.jpg';
import ImgProductSeven from '../img/shop/shop-7.jpg';
import ImgProductEight from '../img/shop/shop-8.jpg';
import ImgProductNine from '../img/shop/shop-9.jpg';
import ImgProductTen from '../img/shop/shop-10.jpg';
import ImgProductEleven from '../img/shop/shop-11.jpg';
import ImgProductTwelve from '../img/shop/shop-12.jpg';
import ImgProductThirteen from '../img/shop/shop-13.jpg';
import ImgProductFourteen from '../img/shop/shop-14.jpg';
import ImgProductFifteen from '../img/shop/shop-15.jpg';
import ImgProductSixteen from '../img/shop/shop-16.jpg';
import ImgProductSeventeen from '../img/shop/shop-17.jpg';
import ImgProductEighteen from '../img/shop/shop-18.jpg';
import ImgProductNineteen from '../img/shop/shop-19.jpg';
import ImgProductTwenty from '../img/shop/shop-20.jpg';
const ProductOne = { backgroundImage: "url(" + ImgProductOne + ")", }
const ProductTwo = { backgroundImage: "url(" + ImgProductTwo + ")", }
const ProductThree = { backgroundImage: "url(" + ImgProductThree + ")", }
const ProductFour = { backgroundImage: "url(" + ImgProductFour + ")", }
const ProductFive = { backgroundImage: "url(" + ImgProductFive + ")", }
const ProductSix = { backgroundImage: "url(" + ImgProductSix + ")", }
const ProductSeven = { backgroundImage: "url(" + ImgProductSeven + ")", }
const ProductEight = { backgroundImage: "url(" + ImgProductEight + ")", }
const ProductNine = { backgroundImage: "url(" + ImgProductNine + ")", }
const ProductTen = { backgroundImage: "url(" + ImgProductTen + ")", }
const ProductEleven = { backgroundImage: "url(" + ImgProductEleven + ")", }
const ProductTwelve = { backgroundImage: "url(" + ImgProductTwelve + ")", }
const ProductThirteen = { backgroundImage: "url(" + ImgProductThirteen + ")", }
const ProductFourteen = { backgroundImage: "url(" + ImgProductFourteen + ")", }
const ProductFifteen = { backgroundImage: "url(" + ImgProductFifteen + ")", }
const ProductSixteen = { backgroundImage: "url(" + ImgProductSixteen + ")", }
const ProductSeventeen = { backgroundImage: "url(" + ImgProductSeventeen + ")", }
const ProductEighteen = { backgroundImage: "url(" + ImgProductEighteen + ")", }
const ProductNineteen = { backgroundImage: "url(" + ImgProductNineteen + ")", }
const ProductTwenty = { backgroundImage: "url(" + ImgProductTwenty + ")", }

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(53, 0, 250, 0.86)',
  },
  content: {
    zIndex: 10,
    border: 'none',
    background: 'transparent',
    padding: 0,
    borderRadius: 0,
  }
};

export default class Shop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      modalOne: false, modalTwo: false, modalThree: false, modalFour: false,
      modalFive: false, modalSix: false, modalSeven: false, modalEight: false,
      modalNine: false, modalTen: false, modalEleven: false, modalTwelve: false,
      modalThirteen: false, modalFourteen: false, modalFifteen: false, modalSixteen: false,
      modalSeventeen: false, modalEighteen: false, modalNineteen: false, modalTwenty: false,
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
  openModalEight() { this.setState({ modalEight: true}); }
  openModalNine() { this.setState({ modalNine: true}); }
  openModalTen() { this.setState({ modalTen: true}); }
  openModalEleven() { this.setState({ modalEleven: true}); }
  openModalTwelve() { this.setState({ modalTwelve: true}); }
  openModalThirteen() { this.setState({ modalThirteen: true}); }
  openModalFourteen() { this.setState({ modalFourteen: true}); }
  openModalFifteen() { this.setState({ modalFifteen: true}); }
  openModalSixteen() { this.setState({ modalSixteen: true}); }
  openModalSeventeen() { this.setState({ modalSeventeen: true}); }
  openModalEighteen() { this.setState({ modalEighteen: true}); }
  openModalNineteen() { this.setState({ modalNineteen: true}); }
  openModalTwenty() { this.setState({ modalTwenty: true}); }

  closeModal() {
    this.setState({
      modalOne: false, modalTwo: false, modalThree: false, modalFour: false,
      modalFive: false, modalSix: false, modalSeven: false, modalEight: false,
      modalNine: false, modalTen: false, modalEleven: false, modalTwelve: false,
      modalThirteen: false, modalFourteen: false, modalFifteen: false, modalSixteen: false,
      modalSeventeen: false, modalEighteen: false, modalNineteen: false, modalTwenty: false,
    });
  }

  render() {
    return (
      <div className={s.shopRoot}>
        <Element name="shop">

          <Modal isOpen={this.state.modalOne} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductOne} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Future City Wall Clock</h2>
              <p>Available in natural wood, black or white frames, our 10" diameter unique Wall Clocks feature a high-impact plexiglass crystal face and a backside hook for easy hanging.<br /><br />Choose black or white hands to match your wall clock frame and art design choice. Clock sits 1.75" deep and requires 1 AA battery (not included).</p>
              <span className={s.price}>$30.00</span>
              <a href="https://society6.com/product/future-city-3dg_wall-clock#s6-3063803p33a33v284a34v285" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalTwo} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductTwo} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Visual Jargon Shower Curtain</h2>
              <p>Customize your bathroom decor with unique shower curtains designed by artists around the world. Made from 100% polyester our designer shower curtains are printed in the USA and feature a 12 button-hole top for simple hanging.<br /><br />The easy care material allows for machine wash and dry maintenance. Curtain rod, shower curtain liner and hooks not included. Dimensions are 71in. by 74in.</p>
              <span className={s.price}>$68.00</span>
              <a href="https://society6.com/product/visual-jargon_shower-curtain#s6-3064005p34a35v287" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalThree} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductThree} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Pixel Tote Bag</h2>
              <p>Our quality crafted Tote Bags are hand sewn in America using durable, yet lightweight, poly poplin fabric. All seams and stress points are double stitched for durability.<br /><br />They are washable, feature original artwork on both sides and a sturdy 1" wide cotton webbing strap for comfortably carrying over your shoulder.</p>
              <span className={s.price}>$18.00</span>
              <a href="https://society6.com/product/pixel-8uh_bag#s6-3064115p29a26v196" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalFour} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductFour} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Squid Throw Pillow</h2>
              <p>Throw Pillow Cover made from 100% spun polyester poplin fabric, a stylish statement that will liven up any room.<br /><br />Individually cut and sewn by hand, the pillow cover measures 16" x 16", features a double-sided print and is finished with a concealed zipper for ease of care. Does not include pillow insert.</p>
              <span className={s.price}>$20.00</span>
              <a href="https://society6.com/product/squid-dr0_pillow#s6-3064150p26a18v126a25v193" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalFive} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductFive} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Skyscraper Art Print</h2>
              <p>Gallery quality Giclée print on natural white, matte, ultra smooth, 100% cotton rag, acid and lignin free archival paper using Epson K3 archival inks. Custom trimmed with 1" border for framing.</p>
              <span className={s.price}>$13.00</span>
              <a href="https://society6.com/product/skyscrapers244495_print#s6-6544414p4a1v45" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalSix} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductSix} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Burger Allover T-Shirt</h2>
              <p>These premium quality American Apparel all over print shirts feature original art from seam to seam. The cotton-soft 100% polyester wicks moisture and maintains a rich color throughout. All over print tees are unisex fit, so women should make size selections accordingly and order a minimum of one size smaller.<br /><br />Please Note: Every shirt is uniquely produced using a sublimation process that can create anomalies in some areas, typically under the arm, that leaves small portions of fabric white.</p>
              <span className={s.price}>$34.00</span>
              <a href="https://society6.com/product/burgers243274_all-over-print-shirt#s6-6541403p44a57v420" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalSeven} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductSeven} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Ball Stationery Card</h2>
              <p>Set of folded stationery cards printed on bright white, smooth card stock to bring your personal artistic style to everyday correspondence.<br /><br />Each card is blank on the inside and includes a soft white, European fold envelope for mailing.</p>
              <span className={s.price}>$12.00</span>
              <a href="https://society6.com/product/ball244477_cards#s6-6544391p22a16v71" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalEight} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductEight} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Face Melt Travel Mug</h2>
              <p>Talk about steely good looks. In addition to a 360-degree wraparound design, our metal travel mugs are crafted with lightweight stainless steel - so they're pretty much indestructible.<br /><br />Plus, they're double-walled to keep drinks hot (or cold), fit in almost any size cup holder and are easy to clean.</p>
              <span className={s.price}>$24.00</span>
              <a href="https://society6.com/product/face-melt244549_metal-travel-mug#s6-6544529p58a201v703" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalNine} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductNine} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Vaporwave Bath Mat</h2>
              <p>The perfect bath mats: fuzzy, foamy and finely enhanced with brilliant art. With a soft, quick-dry microfiber surface, memory foam cushion and skid-proof backing, our shower mats are a cut above your typical rug.<br /><br />Keep them clean with a gentle machine wash (no bleach!) and make sure to hang dry.</p>
              <span className={s.price}>$23.00</span>
              <a href="https://society6.com/product/vaporwave243415_bath-mat#s6-6541777p55a203v508" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalTen} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductTen} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Squid Leggings</h2>
              <p>Our proprietary six-panel cut and sew construction provides an unprecedented quality in fit and versatility with an adjustable waist line for wearing high, low or somewhere in between. Using the highest quality anti-microbial polyester spandex material, these premium leggings wick moisture and remain breathable, making them perfect for running or runways.</p>
              <span className={s.price}>$39.00</span>
              <a href="https://society6.com/product/squid-dr0_leggings#s6-3064150p43a56v415" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalEleven} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductEleven} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Orb Notebook</h2>
              <p>Our notebooks feature wraparound artwork from the world's best artists, with an anti-scuff laminate cover. Unleash your creativy on 52 pages of high quality 70lb text paper - minimal show-through even when you use heavy ink! Available in lined and unlined versions.</p>
              <span className={s.price}>$14.00</span>
              <a href="https://society6.com/product/orb243380_notebook#s6-6541669p59a202v704" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalTwelve} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductTwelve} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Octopus Long Sleeve</h2>
              <p>Tri-Blend Long Sleeve T-Shirts are made with 50% Polyester, 25% Cotton and 25% Rayon.<br /><br />Enjoy everything you love about the fit, feel and durability of a vintage T-shirt.</p>
              <span className={s.price}>$28.00</span>
              <a href="https://society6.com/product/octopus243251_long-sleeve-tshirt#s6-6541332p39a48v352a49v362a50v367" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalThirteen} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductThirteen} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Visual Jargon T-Shirt</h2>
              <p>American Apparel Fine Jersey T-shirts are made with 100% fine jersey cotton combed for softness and comfort.</p>
              <span className={s.price}>$24.00</span>
              <a href="https://society6.com/product/visual-jargon_t-shirt#s6-3064005p15a4v104a5v17a11v49" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalFourteen} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductFourteen} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Space Picker Beach Towel</h2>
              <p>Lay out like a pro with this super comfy, oversized and unique artist-designed Beach Towel. The soft polyester-microfiber front and cotton terry back are perfect for, well, drying your front and back. This design is also available as a bath and hand towel. Machine washable. Towel Dimensions: 74"x37"</p>
              <span className={s.price}>$38.00</span>
              <a href="https://society6.com/product/space-picker_beach-towel#s6-6544724p53a69v456" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalFifteen} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductFifteen} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Faces iPhone Skin</h2>
              <p>Skins are thin, easy-to-remove, vinyl decals for customizing your device. Skins are made from a patented material that eliminates air bubbles and wrinkles for easy application.</p>
              <span className={s.price}>$15.00</span>
              <a href="https://society6.com/product/faces244618_phone-skin#s6-6544673p13a3v600" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalSixteen} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductSixteen} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Vaporwave Metal Print</h2>
              <p>Our metal prints are thin, lightweight and durable 1/16" aluminum sheet canvas. The high gloss finish enhances color and produces sharp image details. Each sheet has a 3/4" wooden frame attached to the back to offset from the wall.<br /><br />Prints have a wire or sawtooth hanger, depending on size selected.</p>
              <span className={s.price}>$89.00</span>
              <a href="https://society6.com/product/vaporwave243415_metal-print#s6-6541777p54a71v465" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalSeventeen} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductSeventeen} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Being Framed Art Print</h2>
              <p>The Conservation Series frame is made from solid wood claimed from socially and environmentally responsible forests. It has a clean and contemporary 0.75" wide x 1.25" deep profile with a smooth veneer finish. Premium shatterproof acrylic protects the face of the art print, while an acid free dust cover on the back provides a custom finish. Includes wall hanging hardware.<br /><br />Framed fine art print on natural white, matte, ultra smooth, 100% cotton rag, acid and lignin free archival paper using an advanced digital dry ink method to ensure vibrant image quality.</p>
              <span className={s.price}>$33.00</span>
              <a href="https://society6.com/product/being244516_framed-print#s6-6544452p21a12v63a13v55" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalEighteen} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductEighteen} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Eyes Rug</h2>
              <p>Using 100% woven polyester, these premium quality area rugs boast an exceptionally soft touch and high durability. Available in three versatile sizes (2' x 3', 3' x 5', 4' x 6') they are the perfect accent to any room in your home.<br /><br />Featuring thousands of designs from your favorite artists on a subtle chevron pattern. Machine washable; non-skid pad not included.</p>
              <span className={s.price}>$28.00</span>
              <a href="https://society6.com/product/eyes244500_rug#s6-6544436p35a36v288" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalNineteen} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductNineteen} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Future City Mug</h2>
              <p>Available in 11 and 15 ounce sizes, our premium ceramic coffee mugs feature wrap-around art and large handles for easy gripping.<br /><br />Dishwasher and microwave safe, these cool coffee mugs will be your new favorite way to consume hot or cold beverages.</p>
              <span className={s.price}>$15.00</span>
              <a href="https://society6.com/product/future-city-3dg_mug#s6-3063803p30a27v199" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>
          <Modal isOpen={this.state.modalTwenty} onRequestCancel={this.onRequestCancel} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} portalClassName={s.shopModalOverlay} contentLabel="Modal">
            <div className={s.leftModalBody}><img src={ImgProductTwenty} /></div><div className={s.rightModalBody}><div className={s.rightModalBodyInner}>
              <h2>Pixel Allover Print T-Shirt</h2>
              <p>These premium quality American Apparel all over print shirts feature original art from seam to seam. The cotton-soft 100% polyester wicks moisture and maintains a rich color throughout. All over print tees are unisex fit, so women should make size selections accordingly and order a minimum of one size smaller.<br /><br />Please Note: Every shirt is uniquely produced using a sublimation process that can create anomalies in some areas, typically under the arm, that leaves small portions of fabric white.</p>
              <span className={s.price}>$34.00</span>
              <a href="https://society6.com/product/pixel-8uh_all-over-print-shirt#s6-3064115p44a57v420" target="_blank" className={s.buyBtn}>BUY ON SOCIETY6.COM</a>
            </div></div><button className={s.closeModal} onClick={this.closeModal}><img src={Close} /></button>
          </Modal>

          <div className={s.shopWrap}>
            <div className={s.sidebar}>
              <a href="https://society6.com/oddscenes">
                <h3 className={s.sidebarHeader}>SEE MORE ON society6.com</h3>
              </a>

              <h3 className={s.categoryHeader}>Categories</h3>
              <ul className={s.shopList}>
                <a href="https://society6.com/oddscenes/all-over-print-shirts">
                  <li>Allover Shirts</li>
                </a>
                <a href="https://society6.com/oddscenes/cases">
                  <li>Phone Cases</li>
                </a>
                <a href="https://society6.com/oddscenes/wall-clocks">
                  <li>Wall Clocks</li>
                </a>
                <a href="https://society6.com/oddscenes/pillows">
                  <li>Pillows</li>
                </a>
                <a href="https://society6.com/oddscenes/tshirts">
                  <li>T-Shirts</li>
                </a>
                <a href="https://society6.com/oddscenes/beach-towels">
                  <li>Towels</li>
                </a>
                <a href="https://society6.com/oddscenes/mugs">
                  <li>Mugs</li>
                </a>
              </ul>
            </div>
            <div className={s.shop}>

              <div className={s.shopGrid} style={ProductOne}>
                <a href="#" onClick={this.openModalOne.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductTwo}>
                <a href="#" onClick={this.openModalTwo.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductThree}>
                <a href="#" onClick={this.openModalThree.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductFour}>
                <a href="#" onClick={this.openModalFour.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductFive}>
                <a href="#" onClick={this.openModalFive.bind(this)}></a>
              </div>

              <div className={s.shopGrid} style={ProductSix}>
                <a href="#" onClick={this.openModalSix.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductSeven}>
                <a href="#" onClick={this.openModalSeven.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductEight}>
                <a href="#" onClick={this.openModalEight.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductNine}>
                <a href="#" onClick={this.openModalNine.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductTen}>
                <a href="#" onClick={this.openModalTen.bind(this)}></a>
              </div>

              <div className={s.shopGrid} style={ProductEleven}>
                <a href="#" onClick={this.openModalEleven.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductTwelve}>
                <a href="#" onClick={this.openModalTwelve.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductThirteen}>
                <a href="#" onClick={this.openModalThirteen.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductFourteen}>
                <a href="#" onClick={this.openModalFourteen.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductFifteen}>
                <a href="#" onClick={this.openModalFifteen.bind(this)}></a>
              </div>

              <div className={s.shopGrid} style={ProductSixteen}>
                <a href="#" onClick={this.openModalSixteen.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductSeventeen}>
                <a href="#" onClick={this.openModalSeventeen.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductEighteen}>
                <a href="#" onClick={this.openModalEighteen.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductNineteen}>
                <a href="#" onClick={this.openModalNineteen.bind(this)}></a>
              </div>
              <div className={s.shopGrid} style={ProductTwenty}>
                <a href="#" onClick={this.openModalTwenty.bind(this)}></a>
              </div>
            </div>
          </div>
        </Element>
      </div>
    )
  }
}
