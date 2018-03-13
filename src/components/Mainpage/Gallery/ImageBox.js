import React from 'react';
import ContainerImage from '../../../containers/Mainpage/Gallery/ContainerImage';
import ImageDescription from './ImageDescription';
import MinimizeButton from './MinimizeButton';
// import CloseButton from './CloseButton';
import ContainerCloseButton from '../../../containers/Mainpage/Gallery/ContainerCloseButton';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';

class ImageBox extends React.Component {
  constructor(props) {
    super(props);
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleMinimize = this.toggleMinimize.bind(this);

    this.state = {
      hover: false,
      isMinimized: false
    }    
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  };

  toggleMinimize() {
    this.setState({
      isMinimized: !this.state.isMinimized
    });
  }

  render() {

    if (this.state.hover) {
      return (
        <div className={"gallery-image-box " + (this.state.isMinimized ? "image-box-minimized" : "")} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <div className="image-box-head-buttons">
            <div className="image-box-head-button image-box-close-button" onClick={this.toggleMinimize}>
              <FontAwesomeIcon icon="fas fa-minus" iconSize="fa-1x" />
            </div>
            <ContainerCloseButton imageId={this.props.image.id}/>
          </div>
          <ContainerImage imageUrl={this.props.image.imageUrl} imageAlt={this.props.image.alt} isMinimized={this.state.isMinimized}/>
          <ImageDescription imageDescription={this.props.image}/>
        </div>
      )
    } else {
      return (
        <div className={"gallery-image-box " + (this.state.isMinimized ? "image-box-minimized" : "")} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <ContainerImage imageUrl={this.props.image.imageUrl} imageAlt={this.props.image.alt} isMinimized={this.state.isMinimized}/>
          <ImageDescription imageDescription={this.props.image}/>
        </div>
      )
    }
  }
}

export default ImageBox;