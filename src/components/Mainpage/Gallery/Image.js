import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleHover = this.toggleHover.bind(this);

    this.state = {
      hover: false
    };
  };
  
  handleClick() {
    this.props.onClick(!this.props.galleryModalImageIsActive);
    this.props.setGalleryModalImage(this.props.imageUrl);
  };

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  };
  
  render() {
    if (this.props.isMinimized) {
      return (
        <div className="gallery-image">
          <img src={this.props.imageUrl} alt={this.props.imageAlt}/>
          <div className="gallery-image-cover">
          <FontAwesomeIcon color={`fontcolor-${this.props.color}-primary`} icon="fas fa-search-plus" iconSize="fa-5x" />
          </div>
        </div>        
      )
    } else if (this.state.hover) {
      return (
        <div className="gallery-image" onClick={this.handleClick} onMouseLeave={this.toggleHover}>
          <img src={this.props.imageUrl} alt={this.props.imageAlt}/>
          <div className="gallery-image-cover">
          <FontAwesomeIcon color={`fontcolor-${this.props.color}-primary`} icon="fas fa-search-plus" iconSize="fa-5x" />
          </div>
        </div>
      )
    } else {
      return (
        <div className="gallery-image" onClick={this.handleClick} onMouseEnter={this.toggleHover}>
          <img src={this.props.imageUrl} alt={this.props.imageAlt}/>
        </div>
      )  
    }
  }
}

export default Image;