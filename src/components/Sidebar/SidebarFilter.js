import React from 'react';
import ContainerFilterItem from '../../containers/Sidebar/ContainerFilterItem';

const SidebarFilter = () => {
  return (
    <div className="sidebar-filter">
      <ContainerFilterItem filterItemClass="filter-mainboard" filter="SHOW_MAINBOARD" icon="far fa-clipboard" iconSize="fa-1x" />
      <ContainerFilterItem filterItemClass="filter-chat" filter="SHOW_CHAT" icon="fas fa-comments" iconSize="fa-1x" />
      <ContainerFilterItem filterItemClass="filter-statistics" filter="SHOW_STATISTICS" icon="fas fa-chart-pie" iconSize="fa-1x" />
      <ContainerFilterItem filterItemClass="filter-notification" filter="SHOW_NOTIFICATION" icon="fas fa-list-ul" iconSize="fa-1x" />
      <ContainerFilterItem filterItemClass="filter-alert" filter="SHOW_ALERT" icon="fas fa-bell" iconSize="fa-1x" />
    </div>    
  );
}

export default SidebarFilter;