import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';

class MinimizeButton extends React.Component {
  render() {
    return (
      <div className="image-box-head-button image-box-close-button" onClick={this.props.onClick}>
        <FontAwesomeIcon icon="fas fa-minus" iconSize="fa-1x" />
      </div>
    );
  }
}

export default MinimizeButton;