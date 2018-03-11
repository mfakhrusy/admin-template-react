import React from 'react';
import ContainerImage from '../../../containers/Mainpage/Gallery/ContainerImage';
import ImageDescription from './ImageDescription';

class ImageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageDescription: {
        description: this.props.image.description,
        imageDate: this.props.image.createdAt,
        isLiked: this.props.image.isLiked,
        like: this.props.image.like,
        id: this.props.image.id
      }
    }
  }

  render() {
    return (
      <div className="gallery-image-box">
        <ContainerImage imageUrl={this.props.image.imageUrl} imageAlt={this.props.image.alt} />
        <ImageDescription imageDescription={this.state.imageDescription}/>
      </div>
    )
  }
}

export default ImageBox;