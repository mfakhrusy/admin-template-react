import React from 'react';
import ImageBox from './ImageBox';

class Gallery extends React.Component {
  render() {
    return (
      <div className="mainpage-gallery">
        {this.props.images.map((image) => {
          return (
            <ImageBox image={image} key={image.id}/>
          )
        })}
      </div>
    );
  }
}

export default Gallery;