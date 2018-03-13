import React from 'react';
import ImageBox from './ImageBox';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // console.log(this.props.images);

    return (
      <div className="mainpage-gallery">
        {this.props.images.map((image) => {
          {/* console.log(image); */}
          return (
            <ImageBox image={image} key={image.id}/>
          )
        })}
      </div>
    );
  }
}

export default Gallery;