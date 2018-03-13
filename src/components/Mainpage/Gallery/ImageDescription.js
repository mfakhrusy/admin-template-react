import React from 'react';
import ContainerLikeButton from '../../../containers/Mainpage/Gallery/ContainerLikeButton';

class ImageDescription extends React.Component {
  constructor(props) {
    super(props); 
  }
  

  render() {
    return (
      <div className="gallery-image-description">
        <p>{this.props.imageDescription.createdAt}</p>
        <p>{this.props.imageDescription.description}</p>
        <ContainerLikeButton isLiked={this.props.imageDescription.isLiked} like={this.props.imageDescription.like} imageId={this.props.imageDescription.id}/>
      </div>
    )
  }
}

export default ImageDescription;