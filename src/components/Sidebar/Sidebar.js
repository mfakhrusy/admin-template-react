import React from 'react';
import SidebarHead from './SidebarHead';
import ContainerSidebarHead from '../../containers/Sidebar/ContainerSidebarHead';
import ContainerSidebarFilter from '../../containers/Sidebar/ContainerSidebarFilter';
// import SidebarFilter from './SidebarFilter';
import ContainerSidebarMain from '../../containers/Sidebar/ContainerSidebarMain';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="page-sidebar" id="page-sidebar">
        <ContainerSidebarHead />
        <ContainerSidebarFilter />
        <ContainerSidebarMain />
      </div>
    );
  }
}

export default Sidebar;