import React from 'react';
import MinimizeButton from './MinimizeButton';
import CloseButton from './CloseButton';

class ImageBoxHeadButtons extends React.Component {
  render() {
    return (
      <div className="image-box-head-buttons">
        <MinimizeButton />
        <CloseButton />
      </div>
    );
  }
}

export default ImageBoxHeadButtons;