import React from 'react';
import ContainerFilterItem from '../../containers/Sidebar/ContainerFilterItem';

const SidebarFilter = ({color}) => {
  return (
    <div className="sidebar-filter" >
      <ContainerFilterItem filterItemClass={"filter-mainboard " + `color-${color}-secondary`} filter="SHOW_MAINBOARD" icon="far fa-clipboard" iconSize="fa-1x" />
      <ContainerFilterItem filterItemClass={"filter-chat " + `color-${color}-secondary`} filter="SHOW_CHAT" icon="fas fa-comments" iconSize="fa-1x" />
      <ContainerFilterItem filterItemClass={"filter-statistics " + `color-${color}-secondary`} filter="SHOW_STATISTICS" icon="fas fa-chart-pie" iconSize="fa-1x" />
      <ContainerFilterItem filterItemClass={"filter-notification " + `color-${color}-secondary`} filter="SHOW_NOTIFICATION" icon="fas fa-list-ul" iconSize="fa-1x" />
      <ContainerFilterItem filterItemClass={"filter-alert " + `color-${color}-secondary`} filter="SHOW_ALERT" icon="fas fa-bell" iconSize="fa-1x" />
    </div>    
  );
}

export default SidebarFilter;