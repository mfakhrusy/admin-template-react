import React from 'react';
import { connect } from 'react-redux';
import ModalThemeChanger from '../../../components/Navbar/ThemeChanger/ModalThemeChanger';


const mapStateToProps = (state) => {
  return {
    color: state.pageColor,
    navbarThemeChangerIsActive: state.navbarThemeChangerIsActive
  };
}

const ContainerModalThemeChanger = connect(
  mapStateToProps
)(ModalThemeChanger);

export default ContainerModalThemeChanger;