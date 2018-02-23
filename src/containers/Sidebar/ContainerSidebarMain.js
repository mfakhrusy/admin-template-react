import React from 'react';
import { connect } from 'react-redux';
import SidebarMain from '../../components/Sidebar/SidebarMain'; 


const mapStateToProps = (state) => {
  return {
    showFilter: state.showFilter
  }
}

const ContainerSidebarMain = connect(mapStateToProps)(SidebarMain);

export default ContainerSidebarMain;