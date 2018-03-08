import React from 'react';
import ContainerLikeButton from '../../../containers/Mainpage/Gallery/ContainerLikeButton';

class ImageDescription extends React.Component {
  constructor() {
    super();
  }
  

  render() {
    return (
      <div className="gallery-image-description">
        <p>{this.props.imageDate}</p>
        <p>{this.props.description}</p>
        <ContainerLikeButton />
      </div>
    )
  }
}

export default ImageDescription;