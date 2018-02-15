import React, { Component, PureComponent } from 'react';


const Avatar = () => {
  return (      
    <div className="sidebar-avatar">
      <img src="images/avatar.jpeg" alt="image-avatar" /> 
    </div>
  );
}

class SidebarHead extends Component {
  render() {
    return (
      <div className="sidebar-head">
        <Avatar />
        <p>Muhamad Fakhrusy</p>
      </div>
    );
  }
}

export default SidebarHead;