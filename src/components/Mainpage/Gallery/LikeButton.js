import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    
  }

  render() {
    return (
      <div className={"gallery-like-button " + `color-${this.props.color}-primary`}>
        <p>Like!</p>
      </div>
    )
  }
}

export default LikeButton;