import React from 'react';
import { connect } from 'react-redux';
import SidebarHead from '../../components/Sidebar/SidebarHead';
import { setSidebarPageLock } from '../../actions/sidebarActions';


const mapStateToProps = (state) => {
  // console.log(state.pageIsLocked);
  return {
    pageIsLocked: state.pageIsLocked,
    color: state.pageColor
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (value) => {
      dispatch(setSidebarPageLock(value));
    }
  }
}


const ContainerSidebarHead = connect(mapStateToProps, mapDispatchToProps)(SidebarHead);

export default ContainerSidebarHead;