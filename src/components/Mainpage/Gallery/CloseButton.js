import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';

class CloseButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseButton = this.handleCloseButton.bind(this);
  }

  handleCloseButton() {
    this.props.removeImage(this.props.imageId);
  }

  render() {
    return (
      <div className="image-box-head-button image-box-close-button"  onClick={this.handleCloseButton}>
        <FontAwesomeIcon icon="fas fa-times" iconSize="fa-1x" />
      </div>
    );
  }
}

export default CloseButton;