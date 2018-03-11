import React from 'react';
import { connect } from 'react-redux';
import ModalThemeBoxHeader from '../../../components/Navbar/ThemeChanger/ModalThemeBoxHeader';
import { setNavbarThemeChanger } from '../../../actions/navbarActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeThemeChanger: (bool) => {
      dispatch(setNavbarThemeChanger(bool))
    }
  };
}

const mapStateToProps = (state) => {
  return {
    navbarThemeChangerIsActive: state.navbarThemeChangerIsActive,
  };
}


const ContainerModalThemeBoxHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalThemeBoxHeader);

export default ContainerModalThemeBoxHeader;