import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRootContainer = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.ESCpress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.ESCpress);
  }

  ESCpress = e => {
    if (e.code === `Escape`) {
      return this.props.close();
    }
  };

  render() {
    return createPortal(
      <div className="overlay" onClick={this.props.state}>
        <div className="modal">{this.props.children}</div>
      </div>,
      modalRootContainer
    );
  }
}

Modal.propTypes = {
  state: PropTypes.func,
  close: PropTypes.func,
};
