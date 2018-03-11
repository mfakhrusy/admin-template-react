import React from 'react';
import Modal from '../../Utils/Modal';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';

class ModalImage extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(!this.props.galleryModalImageIsActive);
  }

  render() {
    if (!this.props.galleryModalImageIsActive) {
      return (
        null
      );
    } else {
      return (
        <Modal>
          <div className="gallery-modal-close-button" onClick={this.handleClick}>
            <FontAwesomeIcon icon="fas fa-times" iconSize="fa-3x" />
          </div>
          <div className="gallery-modal-wrapper">
            <img src={this.props.imageUrl} />
          </div>
        </Modal>
      );    
    }
  }
}

export default ModalImage;