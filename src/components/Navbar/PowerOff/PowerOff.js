import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';

class PowerOff extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={"navbar-power-off " + `color-${this.props.color}-primary`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.toggleHover}>
        <FontAwesomeIcon icon="fas fa-power-off" iconSize="fa-2x" />
      </div>
    )
  }
}

export default PowerOff;