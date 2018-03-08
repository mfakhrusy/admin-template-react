import React from 'react';
// import ContainerImage from '../../../containers/Mainpage/Gallery/ContainerImage';
import ImageDescription from './ImageDescription';
import Image from './Image';


class ImageBox extends React.Component {
  constructor() {
    super();
  }
  

  render() {
    return (
      <div className="gallery-image-box">
        <Image imageUrl={this.props.image.imageUrl} imageAlt={this.props.image.alt}/>
        <ImageDescription description={this.props.image.description} imageDate={this.props.image.createdAt}/>
      </div>
    )
  }
}

export default ImageBox;