import React from 'react';
import SidebarHead from './SidebarHead';
import SidebarFilter from './SidebarFilter';
import SidebarMain from './SidebarMain';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="page-sidebar" id="page-sidebar">
        <SidebarHead />
        <SidebarFilter />
        <SidebarMain />
      </div>
    );
  }
}

export default Sidebar;