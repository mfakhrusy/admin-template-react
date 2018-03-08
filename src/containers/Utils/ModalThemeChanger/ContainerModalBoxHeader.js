import React from 'react';
import { connect } from 'react-redux';
import ModalBoxHeader from '../../../components/Utils/ModalThemeChanger/ModalBoxHeader';
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


const ContainerModalBoxHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalBoxHeader);

export default ContainerModalBoxHeader;