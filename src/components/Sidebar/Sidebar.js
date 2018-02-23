import React from 'react';
import SidebarHead from './SidebarHead';
// import SidebarMain from './SidebarMain';
import SidebarFilter from './SidebarFilter';
import ContainerSidebarMain from '../../containers/Sidebar/ContainerSidebarMain';

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