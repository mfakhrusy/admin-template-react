import React from 'react';
import { connect } from 'react-redux';
import SidebarFilter from '../../components/Sidebar/SidebarFilter';


const mapStateToProps = (state) => {
  return {
    color: state.pageColor
  }
}

const ContainerSidebarFilter = connect(mapStateToProps)(SidebarFilter);

export default ContainerSidebarFilter;