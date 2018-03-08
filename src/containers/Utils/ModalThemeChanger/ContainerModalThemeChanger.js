import React from 'react';
import { connect } from 'react-redux';
import ModalThemeChanger from '../../../components/Utils/ModalThemeChanger/ModalThemeChanger';
// import { setModalThemeChanger } from '../../actions/miscActions';

/*
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (value) => {
      dispatch(setModalThemeChanger(value));
    }0
  };
}
*/

const mapStateToProps = (state) => {
  return {
    color: state.pageColor,
    navbarThemeChangerIsActive: state.navbarThemeChangerIsActive
  };
}

const ContainerModalThemeChanger = connect(
  mapStateToProps
  // mapDispatchToProps
)(ModalThemeChanger);

export default ContainerModalThemeChanger;