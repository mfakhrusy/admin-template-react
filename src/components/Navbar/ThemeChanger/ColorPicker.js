import React from 'react';

class ColorPicker extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.changeColor();
    this.props.closeThemeChanger(!this.props.navbarThemeChangerIsActive);
  }
  
  render() {
    return (
      <div className={"color-picker-box " + `color-${this.props.color}-primary`} onClick={this.handleClick}>
        
      </div>
    )  
  }
}

export default ColorPicker;