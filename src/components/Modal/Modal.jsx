import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalBox, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
    document.body.style.overflow = 'visible';
  }

  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { tags, modalImg } = this.props;

    return createPortal(
      <Overlay onClick={this.closeByBackdrop}>
        <ModalBox>
          <ModalImg src={modalImg} loading="lazy" alt={tags} />
        </ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};