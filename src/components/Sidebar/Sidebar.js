import React from 'react';
import SidebarHead from './SidebarHead';
import SidebarFilter from './SidebarFilter';
import ContainerSidebarMain from '../../containers/ContainerSidebarMain';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="page-sidebar" id="page-sidebar">
        <SidebarHead />
        <SidebarFilter />
        <ContainerSidebarMain />
      </div>
    );
  }
}

export default Sidebar;