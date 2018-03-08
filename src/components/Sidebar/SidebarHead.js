import React from 'react';
import SelfAvatar from './SelfAvatar';
import FontAwesomeIcon from '../Utils/FontAwesomeIcon';

class SidebarHead extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.onClick(!this.props.pageIsLocked);
  }
  
  render() {
    return (
      <div className={"sidebar-head " + `color-${this.props.color}-primary`}>
        <SelfAvatar />
        <p>Muhamad Fakhrusy</p>
        <div className="sidebar-lock-button" onClick={this.handleClick}>
          <FontAwesomeIcon icon="fas fa-lock" iconSize="fa-1x" />
        </div>
      </div>
    );
  }
}

export default SidebarHead;