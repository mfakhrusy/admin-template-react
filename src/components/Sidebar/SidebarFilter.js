import React, { Component } from 'react';
import { ContainerFilterMainboard, ContainerFilterChat, ContainerFilterNotification, ContainerFilterStatistics, ContainerFilterAlert } from '../../containers/ContainerSidebarFilterItem';

class SidebarFilter extends Component {
  render() {
    return (
      <div className="sidebar-filter">
        <ContainerFilterMainboard filter="SHOW_MAINBOARD"/>
        <ContainerFilterChat filter="SHOW_CHAT"/>
        <ContainerFilterStatistics filter="SHOW_STATISTICS"/>
        <ContainerFilterNotification filter="SHOW_NOTIFICATION"/>
        <ContainerFilterAlert filter="SHOW_ALERT"/>
      </div>
    );
  }
}

export default SidebarFilter;