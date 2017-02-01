import React from 'react';
import s from './modal.scss';
import Modal from 'react-modal';


export default class ModalOne extends React.Component {

  render() {
    return (
      <Modal
        className={s.reactModal1}
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        // style={customStyles}
      >
        <h2 ref="subtitle">Hello Modal One !!!!</h2>
        <button onClick={this.closeModal}>close</button>
      </Modal>
    );
  }
}
