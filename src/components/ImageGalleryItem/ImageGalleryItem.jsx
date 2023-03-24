import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false, largeURL: '' };

  closeESC = () => {
    this.setState({ isModalOpen: !true });
  };

  openModal = largeURL => {
    this.setState({ isModalOpen: !false, largeURL });
  };

  closeModal = e => {
    if (e.target.className === 'overlay') {
      this.setState({ isModalOpen: !true });
    }
  };

  render() {
    return (
      <div>
        <li
          className="gallery-item"
          key={this.props.id}
          onClick={() => this.openModal(this.props.largeIMG)}
        >
          <img src={this.props.src} alt="" />
        </li>

        {this.state.isModalOpen && this.state.largeURL !== undefined && (
          <Modal state={this.closeModal} close={this.closeESC}>
            <img className="large-img" src={this.state.largeURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  largeIMG: PropTypes.string,
};
