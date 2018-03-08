import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';

class ThemeChanger extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.onClick(!this.props.navbarThemeChangerIsActive);
  }

  render() {
    return (
      <div className="navbar-theme-changer" onClick={this.handleClick}>
        <FontAwesomeIcon color={`fontcolor-${this.props.color}-primary`} icon="fas fa-circle" iconSize="fa-2x" />
      </div>
    )  
  }
}

export default ThemeChanger;