import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  

}
  
  handleClick() {
    this.props.toggleLike(this.props.imageId);
    if (this.props.isLiked) {
      this.props.decrementLike(this.props.imageId)
    } else {
      this.props.incrementLike(this.props.imageId)
    }
  }

  toggleHover() {

  }

  render() {

    return (
      <div 
        className={"gallery-like-button " + (this.props.isLiked ? `color-${this.props.color}-primary` : "gallery-like-button-base-color")} 
        onClick={this.handleClick}>
        <span className="like-button-icon">
          <FontAwesomeIcon icon={(this.props.isLiked ? "fas" : "far") + " fa-heart"} iconSize="fa-1x" />
        </span>
        <p>{this.props.like}</p>
      </div>
    )
  }
}

export default LikeButton;