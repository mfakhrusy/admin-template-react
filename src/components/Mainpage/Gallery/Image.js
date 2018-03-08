import React from 'react';

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
    console.log(this.props.images);
  };

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  };
  
  render() {
    if (this.state.hover) {
      return (
        <div className="gallery-image" onClick={this.handleClick} onMouseLeave={this.toggleHover}>
          <img src={this.props.imageUrl} alt={this.props.imageAlt}/>
          <p>Lalalal</p>
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