import React from 'react';

class NavItem extends React.Component {

  render() {
    return (
      <li className="navbar-item">
        {this.props.children}
      </li>
    )
  }
}

export default NavItem;