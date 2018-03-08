import React from 'react';
import { connect } from 'react-redux';
import NavNotification from '../../../components/Navbar/NavNotification/NavNotification';
// import { notificationsFetchData } from '../../../actions/navbarActions'; // REMEMBER IMPORT NOT DEFAULT

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
    color: state.pageColor
  }
}

const ContainerNavNotification = connect(mapStateToProps)(NavNotification);

export default ContainerNavNotification;