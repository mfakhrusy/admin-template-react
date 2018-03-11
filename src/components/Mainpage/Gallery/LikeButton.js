import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  
    this.like = this.props.like;
}
  
  handleClick() {
    console.log(this.props.imageId);
    if (!this.props.isLiked) {
      this.like++; 
    }
  }

  render() {
    return (
      <div className={"gallery-like-button " + (this.props.isLiked ? `color-${this.props.color}-primary` : "gallery-like-button-base-color")} onClick={this.handleClick}>
        <p>{this.props.like}</p>
        <FontAwesomeIcon icon={(this.props.isLiked ? "fas" : "far") + " fa-heart"} iconSize="fa-1x" />
      </div>
    )
  }
}

export default LikeButton;