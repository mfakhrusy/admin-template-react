import React from 'react';
import { connect } from 'react-redux';
import ThemeChanger from '../../../components/Navbar/ThemeChanger/ThemeChanger';
import { setNavbarThemeChanger } from '../../../actions/navbarActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (bool) => {
      dispatch(setNavbarThemeChanger(bool));
    }
  };
}

const mapStateToProps = (state) => {
  return {
    color: state.pageColor,
    navbarThemeChangerIsActive: state.navbarThemeChangerIsActive
  };
}

const ContainerThemeChanger = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeChanger);

export default ContainerThemeChanger;