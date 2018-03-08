import React from 'react';
import { connect } from 'react-redux';
import LockedPage from '../../components/Utils/LockedPage';
import { setSidebarPageLock } from '../../actions/sidebarActions';


const mapStateToProps = (state) => {
  return {
    pageIsLocked: state.pageIsLocked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (value) => {
      dispatch(setSidebarPageLock(value));
    }
  }
}


const ContainerLockedPage = connect(mapStateToProps, mapDispatchToProps)(LockedPage);

export default ContainerLockedPage;